"use client";

import { Courses } from "@prisma/client";
import { CourseCard } from "./course-card";

type ListProps = {
  courses: Courses[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: ListProps) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(190px,0.5fr))] gap-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId.toString()}
        />
      ))}
    </div>
  );
};
