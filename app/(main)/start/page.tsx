import SidebarWrapper from "@/components/start/sidebar-wrapper";
import UpdateWrapper from "@/components/start/update-wrapper";
import Header from "./header";
import UserProgress from "@/components/start/user-progress";
import { getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";

const StartPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);
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
      </UpdateWrapper>
    </div>
  );
};

export default StartPage;
