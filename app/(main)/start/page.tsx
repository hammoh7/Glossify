import SidebarWrapper from "@/components/start/sidebar-wrapper";
import UpdateWrapper from "@/components/start/update-wrapper";
import Header from "./header";
import UserProgress from "@/components/start/user-progress";

const StartPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[50px] px-5">
      <SidebarWrapper>
        <UserProgress
          activeCourse={{ title: "Japanese", imageSrc: "/images/jap.png" }}
          lives={10}
          points={100}
          hasActiveSubscription={false}
        />
      </SidebarWrapper>
      <UpdateWrapper>
        <Header title="Japanese" />
      </UpdateWrapper>
    </div>
  );
};

export default StartPage;
