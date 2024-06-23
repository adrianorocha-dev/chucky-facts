"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { showDifferentJoke } from "../actions";

type Props = {
  children: React.ReactNode;
};
export default function RevealButton({ children }: Props) {
  const [show, setShow] = useState(false);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    setShow(false);
  }, [category]);

  return (
    <>
      {show && children}

      {!show ? (
        <Button onClick={() => setShow((val) => !val)}>Reveal</Button>
      ) : (
        <Button onClick={() => showDifferentJoke()}>Show another one</Button>
      )}
    </>
  );
}
