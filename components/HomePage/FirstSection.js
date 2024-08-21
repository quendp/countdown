"use client";

import useInterval from "@/utilities/useInterval";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Link from "next/link";
import { useState } from "react";
dayjs.extend(duration);

const startTime = "2023-09-23T18:55";

export default function FirstSection({ isAnimationDone }) {
  const [duration, setDuration] = useState(
    dayjs?.duration(dayjs().diff(dayjs(startTime))?.$d)
  );

  useInterval(() => {
    const x = dayjs(startTime);
    setDuration(dayjs?.duration(dayjs().diff(x))?.$d);
  }, 1000);

  return (
    <section
      className={`transition-opacity min-h-screen flex flex-col items-start justify-center max-w-lg w-full p-3 ${
        isAnimationDone && duration?.seconds ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-rose-300 text-sm flex justify-center items-center w-full -mt-10 mb-10">
        <span className="bg-rose-300 w-1/4 h-0.5" />
        <span className="px-3 w-1/2 text-center">Click any text below</span>
        <span className="bg-rose-300 w-1/4 h-0.5" />
      </p>
      <Link
        href="/years"
        className="text-rose-700 font-black text-6xl font-serif"
      >
        {duration?.years} years
      </Link>
      <Link
        className="text-rose-700 font-black text-6xl font-serif"
        href="/months"
      >
        {duration?.months} months
      </Link>
      <Link
        className="text-rose-700 font-black text-6xl font-serif"
        href="/days"
      >
        {duration?.days} days
      </Link>
      <Link
        className="text-rose-700 font-black text-6xl font-serif"
        href="/hours"
      >
        {duration?.hours} hours
      </Link>
      <Link
        className="text-rose-700 font-black text-6xl font-serif"
        href="/minutes"
      >
        {duration?.minutes} minutes
      </Link>
      <Link
        className="text-rose-700 font-black text-6xl font-serif"
        href="/seconds"
      >
        {duration?.seconds} seconds
      </Link>
    </section>
  );
}
