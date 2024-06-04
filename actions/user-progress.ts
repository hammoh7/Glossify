"use server";

import { getCourseById, getUserProgress } from "@/database/queries";
import { database } from "@/lib/database";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const newUserProgress = async (courseId: string) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized!");
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error("Course not found!");
  }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await database.userProgress.update({
      where: {
        userId: existingUserProgress.userId,
      },
      data: {
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/image.jpeg",
      },
    });
    revalidatePath("/courses");
    revalidatePath("/start");
    redirect("/start");
  }

  await database.userProgress.create({
    data: {
      userId,
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/image.jpeg",
    },
  });
  revalidatePath("/courses");
  revalidatePath("/start");
  redirect("/start");
};
