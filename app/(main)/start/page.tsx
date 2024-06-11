import SidebarWrapper from "@/components/start/sidebar-wrapper";
import UpdateWrapper from "@/components/start/update-wrapper";
import Header from "./header";
import UserProgress from "@/components/start/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/database/queries";
import { redirect } from "next/navigation";
import Unit from "./units";

const StartPage = async () => {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const [userProgress, units, courseProgress, lessonPercentage] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[50px] px-5">
      <SidebarWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          lives={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </SidebarWrapper>
      <UpdateWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              title={unit.title}
              description={unit.description}
              order={unit.order}
              lessons={unit.lessons}
              activeLesson={courseProgress.activeLesson}
              lessonProgress={lessonPercentage}
              challengeProgress={[]}
            />
          </div>
        ))}
      </UpdateWrapper>
    </div>
  );
};

export default StartPage;
