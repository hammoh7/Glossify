"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

type SidebarItems = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItems = ({ label, iconSrc, href }: SidebarItems) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className="justify-start h-[45px] flex"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height="35"
          width="35"
        />
        {label}
      </Link>
    </Button>
  );
};
