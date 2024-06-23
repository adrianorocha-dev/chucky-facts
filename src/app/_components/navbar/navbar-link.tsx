"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  console.log({ pathname, href });

  return (
    <Link
      className={cn(
        "flex-1 p-2 border-b border-slate-800",
        pathname === href && "bg-slate-800 text-white"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
