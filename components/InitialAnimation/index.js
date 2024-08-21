"use client";

import delay from "@/utilities/delay";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function InitialAnimation({ setIsAnimationDone }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [imageClassName, setImageClassName] = useState("beating-heart-50");
  const [containerClassName, setContainerClassName] = useState("opacity-100");
  const [hideComponent, setHideComponent] = useState(false);

  const updateDimensions = useCallback(async () => {
    let delayTime = 250;
    if (searchParams?.get("noanimation") === "true") {
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
    document.body.classList.remove("overflow-y-hidden");

    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("noanimation");
    router.replace(`${pathname}?${nextSearchParams}`);

    setIsAnimationDone(true);
    setHideComponent(true);
  }, [setIsAnimationDone, searchParams]);

  useEffect(() => {
    updateDimensions();
  }, []);

  return hideComponent ? null : (
    <div
      className={`${containerClassName} initial-animation min-h-screen min-w-full fixed top-0 left-0 bg-gray-50 flex flex-col items-center justify-center`}
    >
      <p className="mb-0.5 pt-40 font-serif text-lg text-rose-300">
        Franzel & Quen
      </p>
      <p className="mb-5 font-sans text-xs text-rose-300 font-light">
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
