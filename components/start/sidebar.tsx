import { cn } from "@/lib/utils";
import { Languages, Loader2 } from "lucide-react";
import Link from "next/link";
import SidebarContent from "./sidebar-content";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[260px] lg:fixed bg-gradient-to-l from-blue-300 to-indigo-500 left-0 top-0 px-3 border-r-2 flex-col",
        className
      )}
    >
      <Link
        className="font-bold text-3xl text-blue-800 flex items-center justify-center pt-3"
        href="/start"
      >
        <Languages className="mr-2 h-7 w-7" />
        Glossify
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 pl-2 pr-2 pt-8">
        <SidebarContent
          label="Learn"
          href="/start"
          iconSrc="/images/learn.jpeg"
        />
        <SidebarContent
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/images/leaderboard.jpeg"
        />
        <SidebarContent
          label="Challenges"
          href="/challenges"
          iconSrc="/images/challenges.jpeg"
        />
      </div>
      <div className="p-5">
        <ClerkLoading>
          <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
