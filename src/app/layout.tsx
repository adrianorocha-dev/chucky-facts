import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Link from "next/link";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/cn";
import NavBar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuck Norris Jokes",
  description: "Made by Adriano using Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <NavBar />

        {children}

        <Toaster />
      </body>
    </html>
  );
}
