import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  id: string;
  title: string;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
}

const CourseCard = ({
  id,
  title,
  imageSrc,
  onClick,
  disabled,
  active,
}: CourseCardProps) => {
  return (
    <div
      onClick={() => onClick(Number(id))}
      className={cn(
        "flex flex-col items-center justify-between h-full min-h-[200px] min-w-[200px] rounded-2xl cursor-pointer p-3 pb-5 border-b-3 border-2 hover:bg-black/10 active:border-b-2",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="flex items-center min-[20px] w-full justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-lg bg-green-600 p-1">
            <CheckCircle className="h-5 w-5 text-white stroke-[3]" />
          </div>
        )}
      </div>
      <Image 
        src={imageSrc}
        alt={title}
        height={70}
        width={90}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="text-slate-700 text-center font-bold mt-2">{title}</p>
    </div>
  );
};

export default CourseCard;
