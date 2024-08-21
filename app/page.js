"use client";

import HomePage from "@/components/HomePage";
import InitialAnimation from "@/components/InitialAnimation";
import { useState } from "react";

export default function Home() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
    <main>
      <InitialAnimation setIsAnimationDone={setIsAnimationDone} />
      <HomePage isAnimationDone={isAnimationDone} />
    </main>
  );
}
