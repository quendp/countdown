"use client";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
export default function HomePage({ isAnimationDone }) {
  // * lenis smooth scrolling finally nahanap din kita HAHAAHHA
  useEffect(() => {
    if (!isAnimationDone) return;
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [isAnimationDone]);

  // * This one is used for Perspective Section Transition of SecondSection and ThirdSection : ref - https://blog.olivierlarose.com/tutorials/perspective-section-transition
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className="bg-rose-200 flex flex-col items-center justify-start"
    >
      <FirstSection isAnimationDone={isAnimationDone} />
      {isAnimationDone && (
        <div className="relative w-full h-[150vh] flex flex-col items-center justify-start bg-gray-800">
          <SecondSection />
          <ThirdSection scrollYProgress={scrollYProgress} />
        </div>
      )}
    </main>
  );
}
