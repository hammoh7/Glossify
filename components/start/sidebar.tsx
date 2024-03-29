"use client";

import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import Link from "next/link";
import { SidebarItems } from "./sidebar-items";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import { getCurrentUser } from "@/hooks/current-user";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const user = getCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div
      className={cn(
        "flex h-full lg:w-[250px] bg-gradient-to-t from-sky-200 to-sky-400 lg:fixed left-0 top-0 px-3 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/start">
        <div className="w-full flex flex-col gap-y-3 items-center justify-center">
          <h1 className={cn("text-3xl font-bold flex mt-5 mb-5")}>
            <Languages className="h-8 w-8 mr-2" />
            Glossify
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItems label="LEARN" href="/start" iconSrc="/images/learn.jpeg" />
        <SidebarItems
          label="LEADERBOARD"
          href="/leaderboard"
          iconSrc="/images/leaderboard.jpeg"
        />
        {/* <SidebarItems label="QUESTS" href="/quests" iconSrc="/images/quests.jpeg" />
        <SidebarItems label="BUY" href="/buy" iconSrc="/images/buy.jpeg" /> */}
      </div>
      <div className="p-5">
        <Button
          className="text-white text-md bg-gradient-to-l from-indigo-400 to-blue-500 rounded-md shadow-md transform transition-transform hover:translate-y-[-3px]"
          onClick={onClick}
          type="submit"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

