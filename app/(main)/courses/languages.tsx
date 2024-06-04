"use client";

import { Courses } from "@prisma/client";
import CourseCard from "./courseCard";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {
  courses: Courses[];
  activeCourseId: string | undefined;
};

const Languages = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const onClick = (id: string) => {
    if (pending) return;
    if (id === activeCourseId) {
      return router.push("/start");
    }
    startTransition(() => {
      
    })
  };

  return (
    <div className="grid grid-cols-2 gap-3 pt-5 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default Languages;
