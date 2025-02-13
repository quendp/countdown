"use client";

import delay from "@/utilities/delay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
export default function InitialAnimation({ setIsAnimationDone }) {
  const isNoAnimation =
    typeof window !== "undefined" &&
    localStorage?.getItem("noanimation") === "true";
  const [imageClassName, setImageClassName] = useState("beating-heart-50");
  const [containerClassName, setContainerClassName] = useState("opacity-100");
  const [hideComponent, setHideComponent] = useState(false);

  const updateDimensions = useCallback(async () => {
    let delayTime = 250;
    if (localStorage.getItem("noanimation") === "true") {
      delayTime = 0;
    }
    document.body.classList.add("overflow-y-hidden");
    await delay(delayTime);
    setImageClassName("beating-heart-60");
    await delay(delayTime);
    setImageClassName("beating-heart-50");
    await delay(delayTime);
    setImageClassName("beating-heart-60");
    await delay(delayTime);
    setImageClassName("beating-heart-50");
    await delay(delayTime);
    setImageClassName("beating-heart-60");
    await delay(delayTime);
    setImageClassName("beating-heart-50");
    await delay(delayTime);
    setImageClassName("beating-heart-60");
    await delay(delayTime);
    setImageClassName("beating-heart-50");
    await delay(delayTime);
    setImageClassName("beating-heart-2500");
    await delay(delayTime * 2);
    setContainerClassName("opacity-0");
    await delay(delayTime * 2);
    setIsAnimationDone(true);
    setHideComponent(true);
    document.body.classList.remove("overflow-y-hidden");
    localStorage.removeItem("noanimation");
  }, [setIsAnimationDone]);

  useEffect(() => {
    updateDimensions();
  }, []);

  return hideComponent || isNoAnimation ? <></> : (
    <div
      className={`${containerClassName} initial-animation min-h-screen min-w-full fixed top-0 left-0 bg-rose-300 flex flex-col items-center justify-center`}
    >
      <p className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 font-serif text-lg text-rose-800">
        Franzel & Quen
      </p>
      <Image
        className={`${imageClassName} fixed top-1/2 left-1/2`}
        src="/heart-big-image.png"
        alt="Heart"
        width={2500}
        height={2500}
      />
    </div>
  );
}
