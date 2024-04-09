"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface SidebarContentProps {
  label: string;
  iconSrc: string;
  href: string;
}

const SidebarContent = ({ label, iconSrc, href }: SidebarContentProps) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button variant={active ? "default" : "ghost"} className="justify-start h-[48px]" asChild>
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={30}
          width={30}
        />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarContent;
