import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CourseCardProps = {
  title: string;
  id: string;
  imageSrc: string;
  onClick: (id: string) => void;
  disabled?: boolean;
  active?: boolean;
};

export const CourseCard = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: CourseCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-3 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-5 min-h-[195px] min-w-[170px]",
        disabled && "pointer-events-none opacity-30"
      )}
    >
      <div className="min-[20px] w-full flex items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-400">
            <Check className="text-white stroke-[3] h-5 w-5 p-1" />
          </div>
        )}
      </div>
      <Image src={imageSrc} alt={title} height={65} width={85} className="rounded-lg drop-shadow-md border object-cover" />
      <p className="text-slate-700 text-center font-semibold mt-2">{title}</p>
    </div>
  );
};
