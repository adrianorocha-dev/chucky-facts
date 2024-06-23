"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
};

export default function NavBarLink({ href, children, exact = false }: Props) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      className={cn(
        "flex-1 border-b border-slate-800 p-2",
        isActive && "bg-slate-800 text-white",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
