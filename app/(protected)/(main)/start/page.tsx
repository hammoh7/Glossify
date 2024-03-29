import { SideWrapper } from "@/components/start/sidebar-wrapper";
import { LearnWrapper } from "@/components/start/learn-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/start/user-progress";

const StartPage = () => {
  return (
    <div className="flex flex-row gap-[48px] px-5">
      <LearnWrapper>
        <Header title="Japanese" />
      </LearnWrapper>
      <SideWrapper>
        <UserProgress
          activeCourse={{ title: "Japanese", imageSrc: "/images/jap.png" }}
          hearts={5}
          marks={100}
          hasActiveSubscription={false}
        />
      </SideWrapper>
    </div>
  );
};

export default StartPage;
