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
      if (lesson.challenges.length === 0) {
        return { ...lesson, completed: false };
      }
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

export const getCourseProgress = cache(async () => {
  const { userId } = await auth();
  const userProgress = await getUserProgress();

  if (!userId || !userProgress?.activeCourseId) {
    return null;
  }

  const unitsInActiveCourse = await database.units.findMany({
    where: { courseId: userProgress.activeCourseId },
    orderBy: { order: 'asc' },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
        include: {
          challenges: {
            include: {
              challengeProgress: {
                where: { userId: userId },
              },
            },
          },
        },
      },
    },
  });

  const firstUncompletedLesson = unitsInActiveCourse
    .flatMap((unit) => unit.lessons)
    .find((lesson) => {
      return lesson.challenges.some((challenge) => {
        return !challenge.challengeProgress || challenge.challengeProgress.length === 0 || challenge.challengeProgress.some((progress) => progress.completed === false);
      });
    });

  return {
    activeLesson: firstUncompletedLesson,
    activeLessonId: firstUncompletedLesson?.id,
  };
})

export const getLesson = cache(async (id?: string) => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  const courseProgress = await getCourseProgress();
  const lessonId = id || courseProgress?.activeLessonId;

  if (!lessonId) {
    return null;
  }

  const data = await database.lessons.findFirst({
    where: { id: lessonId },
    include: {
      challenges: {
        orderBy: { order: 'asc' },
        include: {
          challengeOptions: true,
          challengeProgress: {
            where: { userId: userId },
          },
        },
      },
    },
  });

  if (!data || !data.challenges) {
    return null;
  }

  const normalizedChallenges = data.challenges.map((challenge) => {
    const completed = challenge.challengeProgress && challenge.challengeProgress.length > 0 && challenge.challengeProgress.every((progress) => progress.completed);
    return { ...challenge, completed };
  });

  return { ...data, challenges: normalizedChallenges };
});

export const getLessonPercentage = cache(async () => {
  const courseProgress = await getCourseProgress();
  if (!courseProgress?.activeLessonId) {
    return 0;
  }
  const lesson = await getLesson(courseProgress.activeLessonId);
  if (!lesson) {
    return 0;
  }
  const completedChallenges = lesson.challenges.filter((challenge) => challenge.completed);
  const percentage = Math.round((completedChallenges.length / lesson.challenges.length) * 100);
  return percentage;
});
