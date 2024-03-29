import { getCourses } from "@/data/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const courses = await getCourses();

    return ( 
        <div className="h-full max-w-[875px] px-3 mx-auto">
            <h1 className="text-2xl font-semibold text-slate-800">
                Courses
            </h1>
            <List courses={courses} activeCourseId={1} />
        </div>
     );
}
 
export default CoursesPage;