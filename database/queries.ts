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
