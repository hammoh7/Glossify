"use client";

import { Courses } from "@prisma/client";
import CourseCard from "./courseCard";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { newUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  courses: Courses[];
  activeCourseId: string | undefined;
};

const Languages = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const onClick = (id: number) => {
    if (pending) return;
    if (id === Number(activeCourseId)) {
      return router.push("/start");
    }
    startTransition(() => {
      newUserProgress(String(id)).catch(() =>
        toast.error("Something went wrong!")
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-3 pt-5 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default Languages;
