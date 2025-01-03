"use client";

import HomePage from "@/components/HomePage";
import InitialAnimation from "@/components/InitialAnimation";
import PageTransition from "@/utilities/PageTransition";
import { useState } from "react";

export default function Home() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  return (
      <PageTransition key="hom">
        <InitialAnimation setIsAnimationDone={setIsAnimationDone} />
        <HomePage isAnimationDone={isAnimationDone} />
      </PageTransition>
  );
}
