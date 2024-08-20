"use client";

import dayjs from "dayjs";
import { useMemo } from "react";
export default function HomePage() {
  const yearsDiff = useMemo(
    () => dayjs().diff(dayjs("2023-09-23"), "year"),
    []
  );
  const monthsDiff = useMemo(
    () => dayjs().diff(dayjs("2023-09-23"), "month"),
    []
  );
  const daysDiff = useMemo(() => dayjs().diff(dayjs("2023-09-23"), "day"), []);
  const hoursDiff = useMemo(
    () => dayjs().diff(dayjs("2023-09-23"), "hour"),
    []
  );

  return (
    <section className="background-pink flex min-h-screen flex-col items-stretch justify-start p-3">
      <p className="text-rose-700 font-bold mb-5">
        Together since September 23, 2023
      </p>
      <p className="text-rose-800 font-black text-7xl pb-20 text-right">
        {yearsDiff} years
      </p>
      <p className="text-rose-700 font-black text-5xl pb-14">
        {monthsDiff} months
      </p>
      <p className="text-rose-600 font-black text-4xl pb-10 text-right">
        {daysDiff} days
      </p>
      <p className="text-rose-500 font-black text-2xl pb-5">
        {hoursDiff} hours
      </p>
    </section>
  );
}
