import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type UserProgressProps = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  marks: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  marks,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="border rounded-md"
            width={30}
            height={30}
          />
        </Button>
      </Link>
      <Link href="/buy">
        <Button variant="ghost" className="text-red-400">
          <Image
            src="/images/marks.jpeg"
            height={28}
            width={28}
            alt="Marks"
            className="mr-2"
          />
          {marks}
        </Button>
      </Link>
      <Link href="/buy">
        <Button variant="ghost" className="text-red-700">
          <Image
            src="/images/heart.jpeg"
            height={25}
            width={25}
            alt="Life"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
