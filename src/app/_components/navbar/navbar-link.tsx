"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        "flex-1 p-2 border-b border-slate-800",
        isActive && "bg-slate-800 text-white"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
