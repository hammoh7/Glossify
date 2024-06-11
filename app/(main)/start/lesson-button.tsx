"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Crown, Lock, Star } from "lucide-react";
import Link from "next/link";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

interface LessonButtonProps {
  id: String;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  progressPercentage: number;
}

const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  progressPercentage,
}: LessonButtonProps) => {
  const isFirst = index === 0;
  const isLast = index === totalCount;

  const isCompleted = !current && !locked;
  const Icon = isCompleted ? Check : isLast ? Crown : locked ? Lock : Star;
  const href = isCompleted || current ? `/lessons` : "/lessons/${id}";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
      className="flex-shrink-0"
    >
      <div 
        className={cn(
          "w-48 h-48 m-4 p-4 rounded-xl shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:rotate-1 hover:shadow-xl",
          current ? "bg-gradient-to-br from-indigo-500 to-indigo-600" : 
          isCompleted ? "bg-gradient-to-br from-emerald-400 to-emerald-500" :
          "bg-gray-100"
        )}
      >
        <div className="h-full flex flex-col items-center justify-between">
          {(current || isCompleted || locked) && (
            <div className={cn(
              "font-bold text-xl animate-pulse",
              current ? "text-white" : 
              isCompleted ? "text-emerald-100" : 
              "text-gray-500"
            )}>
              {current ? "Start" : isCompleted ? "Done" : "Locked"}
            </div>
          )}
          <div className="w-28 h-28">
            <CircularProgressbarWithChildren
              value={Number.isNaN(progressPercentage) ? 0 : progressPercentage}
              styles={{
                path: {
                  stroke: current ? "#FFFFFF" : isCompleted ? "#F0FDF4" : "#4F46E5",
                  strokeLinecap: "round",
                },
                trail: {
                  stroke: current ? "#A5B4FC" : isCompleted ? "#BBF7D0" : "#E0E7FF",
                },
              }}
            >
              <Button
                size="sm"
                variant="secondary"
                className={cn(
                  "h-16 w-16 rounded-full border-2 transition-transform duration-300 ease-out hover:scale-110",
                  current ? "border-white bg-indigo-700" : 
                  isCompleted ? "border-emerald-100 bg-emerald-600" :
                  locked ? "border-gray-300 bg-gray-200" : 
                  "border-indigo-500 bg-white"
                )}
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    current ? "text-white" : 
                    isCompleted ? "text-emerald-100" :
                    locked ? "text-gray-500" : 
                    "fill-indigo-500 text-white"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default LessonButton;