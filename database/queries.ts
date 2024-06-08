import { database } from "@/lib/database";
import { auth } from "@clerk/nextjs";
import { cache } from "react";

export const getCourses = cache(async () => {
  const data = await database.courses.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  const data = await database.userProgress.findFirst({
    where: {
      userId: userId,
    },
    include: {
      activeCourse: true,
    },
  });
  return data;
});

export const getCourseById = cache(async (courseId: string) => {
  const data = await database.courses.findFirst({
    where: {
      id: courseId,
    },
  });
  return data;
});

export const getUnits = cache(async () => {
  const userProgress = await getUserProgress();
  const { userId } = await auth();

  if (!userId || !userProgress?.activeCourseId) {
    return [];
  }
  const data = await database.units.findMany({
    where: {
      courseId: userProgress.activeCourseId,
    },
    include: {
      lessons: {
        include: {
          challenges: {
            include: {
              challengeProgress: {
                where: {
                  userId: userId,
                },
              },
            },
          },
        },
      },
    },
  });

  const normalizedData = data.map((unit) => {
    const lessonWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed)
        );
      });
      return { ...lesson, completed: allCompletedChallenges };
    });
    return { ...unit, lessons: lessonWithCompletedStatus };
  });

  return normalizedData;
});
