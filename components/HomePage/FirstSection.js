"use client";

import useInterval from "@/utilities/useInterval";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useState } from "react";
dayjs.extend(duration);

const startTime = "2023-09-23T18:55";

export default function FirstSection({ isAnimationDone }) {
  const [duration, setDuration] = useState(
    dayjs?.duration(dayjs(startTime).diff(dayjs())?.$d)
  );

  useInterval(() => {
    const x = dayjs(startTime);
    const y = dayjs();
    setDuration(dayjs?.duration(x.diff(y))?.$d);
  }, 1000);

  return (
    <section
      className={`transition-opacity min-h-screen flex flex-col items-start justify-center max-w-lg w-full p-3 ${
        isAnimationDone ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.years} years
      </p>
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.months} months
      </p>
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.days} days
      </p>
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.hours} hours
      </p>
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.minutes} minutes
      </p>
      <p className="text-rose-700 font-black text-6xl font-serif">
        {-1 * duration?.seconds} seconds
      </p>
    </section>
  );
}
