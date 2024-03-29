import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[26px] lg:mt-[-26px] flex items-center justify-between border-b-2 mb-4 text-slate-800 lg:z-48">
      <Link href="/courses">
        <Button>
          <ArrowRightCircle className="h-5 w-5 stroke-2 text-slate-200" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};
