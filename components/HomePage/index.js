"use client";

import Lenis from "@studio-freight/lenis";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const FirstSection = dynamic(() => import("./FirstSection"));
const SecondSection = dynamic(() => import("./SecondSection"));
const ThirdSection = dynamic(() => import("./ThirdSection"));

export default function HomePage({ isAnimationDone }) {
  useEffect(() => {
    if (!isAnimationDone) return;
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [isAnimationDone]);

  return (
    <main className="bg-rose-200 flex flex-col items-center justify-start">
      <FirstSection isAnimationDone={isAnimationDone} />
      {isAnimationDone && (
        <div className="relative w-full h-[150vh] flex flex-col items-center justify-start bg-gray-800">
          <SecondSection />
          <ThirdSection />
        </div>
      )}
    </main>
  );
}
