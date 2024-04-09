import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Infinity } from "lucide-react";

interface UserProgressProps {
  activeCourse: { title: string; imageSrc: string };
  lives: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  lives,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex items-center justify-center gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="outline" className="bg-violet-800 hover:bg-violet-900">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={30}
            height={30}
          />
        </Button>
      </Link>
      <Link href="/store">
        <Button
          variant="outline"
          className="text-white bg-violet-800 hover:bg-violet-900"
        >
          <Image
            src="/images/points.jpeg"
            alt="Points"
            height={28}
            width={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/store">
        <Button
          variant="outline"
          className="text-white bg-violet-800 hover:bg-violet-900"
        >
          <Image
            src="/images/lives.jpeg"
            alt="Lives"
            height={25}
            width={25}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <Infinity className="h-4 w-4 stroke-[3]" />
          ) : (
            lives
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
