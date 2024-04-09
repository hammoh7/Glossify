import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex sticky top-0 pb-3 lg:pt-[28px] lg:mt-[-28px] items-center justify-between border-b-2 mb-5 text-slate-800 lg:z-50">
      <Link href="/courses">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost">
                <ArrowRight className="h-4 w-4 stroke-2 text-slate-800" />
              </Button>
              <TooltipContent side="right">
                <p>Course</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};

export default Header;
