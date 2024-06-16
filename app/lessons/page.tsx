import { getLesson, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonsPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/start");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialPercentage={initialPercentage}
      initalHearts={userProgress.hearts}
      initialLessonChallenges={lesson.challenges}
      userSubscription={null}
    />
  );
};

export default LessonsPage;
