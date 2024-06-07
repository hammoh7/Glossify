import SidebarWrapper from "@/components/start/sidebar-wrapper";
import UpdateWrapper from "@/components/start/update-wrapper";
import Header from "./header";
import UserProgress from "@/components/start/user-progress";
import { getUnits, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";

const StartPage = async () => {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();
  const [userProgress, units] = await Promise.all([userProgressData, unitsData]);
  
  if (!userProgress || !userProgress.activeCourse) {
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
            {JSON.stringify(unit)}
          </div>
        ))}
      </UpdateWrapper>
    </div>
  );
};

export default StartPage;
