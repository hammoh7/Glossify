import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

interface HeaderProps {
  label: string;
}

export const AuthHeader = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-3 items-center justify-center">
      <h1 className={cn("text-3xl font-bold flex")}>
        <Languages className="h-8 w-8 mr-2" />
        Glossify
      </h1>
      <p className="text-muted-foreground text-md">{label}</p>
    </div>
  );
};
