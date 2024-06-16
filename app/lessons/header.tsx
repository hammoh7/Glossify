import { Progress } from "@/components/ui/progress";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  return (
    <header className="flex w-full lg:pt-[50px] pt-[20px] px-10 gap-x-7 items-center justify-between max-w-[1000px] mx-auto">
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-red-500">
        <Image
          className="mr-2"
          src="/images/lives.jpeg"
          height={28}
          width={28}
          alt="Lives"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-5 w-5 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
