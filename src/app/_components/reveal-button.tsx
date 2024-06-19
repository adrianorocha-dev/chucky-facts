"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { showDifferentJoke } from "../actions";

type Props = {
  children: React.ReactNode;
};
export default function RevealButton({ children }: Props) {
  const [show, setShow] = useState(false);

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
