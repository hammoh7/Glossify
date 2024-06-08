import { Button } from "@/components/ui/button";
import { ChallengeProgress, Lessons, Units } from "@prisma/client";
import { LucideHandMetal } from "lucide-react";
import Link from "next/link";
import LessonButton from "./lesson-button";

interface UnitProps {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lessons[];
  activeLesson?: {
    unit: Units;
  };
  lessonProgress: number;
  challengeProgress: ChallengeProgress[];
}

const Unit = ({
  id,
  title,
  description,
  order,
  lessons,
  activeLesson,
  lessonProgress,
  challengeProgress,
}: UnitProps) => {
  return (
    <>
      <header>
        <div className="flex items-center justify-center w-full bg-blue-800 text-white rounded-2xl p-3">
          <div className="space-y-2">
            <h1 className="flex font-bold text-xl items-center justify-center">
              {title}
            </h1>
            <p className="font-semibold text-lg">{description}</p>
          </div>
          <div className="xl:ml-80">
            <Link href="/lessons">
              <Button className="hidden xl:flex border-2 border-b-3 active:border-b-2">
                <LucideHandMetal className="mr-2" />
                Learn
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center flex-col">
          {lessons.map((lesson, index) => {
            const isCurrent = lesson.id === activeLesson?.unit.id;
            const lessonChallengeProgress = challengeProgress
              ? challengeProgress.filter(
                  (progress) => progress.lessonId === lesson.id
                )
              : [];
            const isLocked =
              !lessonChallengeProgress.some((progress) => progress.completed) &&
              !isCurrent;

            return (
              <div>
                <LessonButton
                  key={lesson.id}
                  id={lesson.id}
                  index={index}
                  totalCount={lessons.length - 1}
                  locked={isLocked}
                  current={isCurrent}
                  progressPercentage={lessonProgress}
                />
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Unit;
