"use client";

import delay from "@/utilities/delay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function InitialAnimation() {
  const [imageClassName, setImageClassName] = useState("beating-heart-50");
  const [containerClassName, setContainerClassName] = useState("opacity-100");
  const [hideComponent, setHideComponent] = useState(false);

  const updateDimensions = useCallback(async () => {
    await delay(250);
    setImageClassName("beating-heart-60");
    await delay(250);
    setImageClassName("beating-heart-50");
    await delay(250);
    setImageClassName("beating-heart-60");
    await delay(250);
    setImageClassName("beating-heart-50");
    await delay(250);
    setImageClassName("beating-heart-60");
    await delay(250);
    setImageClassName("beating-heart-50");
    await delay(250);
    setImageClassName("beating-heart-60");
    await delay(250);
    setImageClassName("beating-heart-50");
    await delay(250);
    setImageClassName("beating-heart-2500");
    await delay(500);
    setContainerClassName("opacity-0");
    await delay(500);
    setHideComponent(true);
  }, []);

  useEffect(() => {
    updateDimensions();
  }, [updateDimensions]);

  return hideComponent ? null : (
    <div
      className={`${containerClassName} initial-animation min-h-screen min-w-full fixed top-0 left-0 bg-gray-50 flex flex-col items-center justify-end`}
    >
      <p className="mb-0.5 font-sans text-sm text-rose-300 font-semibold">
        Franzel & Quen
      </p>
      <p className="mb-5 font-sans text-xs text-rose-300 font-extralight">
        Since September 23, 2023
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
