"use client";

import Lenis from "@studio-freight/lenis";
import dayjs from "dayjs";
import { useEffect, useMemo } from "react";
export default function HomePage({ isAnimationDone }) {
  const monthsDiff = useMemo(
    () => dayjs().diff(dayjs("2023-09-23"), "month"),
    []
  );
  const daysDiff = useMemo(() => dayjs().diff(dayjs("2023-09-23"), "day"), []);
  const hoursDiff = useMemo(
    () => dayjs().diff(dayjs("2023-09-23"), "hour"),
    []
  );

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
    <section className="bg-rose-200 flex min-h-screen flex-col items-stretch justify-start p-3">
      <p className="text-rose-700 font-bold mb-5 min-h-screen">
        Together since September 23, 2023
      </p>
      <p className="text-rose-700 font-black text-5xl pb-14 min-h-screen">
        {monthsDiff} months
      </p>
      <p className="text-rose-600 font-black text-4xl pb-10 text-right min-h-screen">
        {daysDiff} days
      </p>
      <p className="text-rose-500 font-black text-2xl pb-5 min-h-screen">
        {hoursDiff} hours
      </p>
    </section>
  );
}
