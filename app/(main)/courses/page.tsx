import { getCourses, getUserProgress } from "@/database/queries";
import Languages from "./languages";

const CoursesPage = async () => {
  const courses = await getCourses();
  const userProgress = await getUserProgress();

  return (
    <div className="h-full max-w-[800px] px-3 mx-auto">
      <h1 className="text-2xl text-slate-800 font-bold">Courses</h1>
      <p>Select a language you want to learn</p>
      <Languages
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
