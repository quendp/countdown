"use client";

import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./FirstSection"));
const SecondSection = dynamic(() => import("./SecondSection"));
const ThirdSection = dynamic(() => import("./ThirdSection"));
const FourthSection = dynamic(() => import("./FourthSection"));

export default function HomePage({ isAnimationDone }) {

  return (
    <main className="bg-rose-200 flex flex-col items-center justify-start">
      <FirstSection isAnimationDone={isAnimationDone} />
      {isAnimationDone && (
        <div className="relative w-full h-[150vh] flex flex-col items-center justify-start bg-gray-800">
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </div>
      )}
    </main>
  );
}
