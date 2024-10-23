"use client";

import { dateTimeCounter } from "@/utilities/dateTimeCounter";
import useInterval from "@/utilities/useInterval";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const startTime = "2023-09-23T18:55";

const currentEvent = {
  title: "Happy 13th Monthsary my love!",
  link: "/monthsary/13",
};

function FirstSection({ isAnimationDone }) {
  const [duration, setDuration] = useState(dateTimeCounter(startTime));

  useInterval(() => {
    setDuration(dateTimeCounter(startTime));
  }, 1000);

  const isMonthsary = useMemo(() => {
    return duration?.days === 0;
  }, [duration]);

  const timeUnits = useMemo(() => {
    const { years, months, days, hours, minutes, seconds } = duration;
    return [
      {
        href: "/years",
        value: years,
        label: years === 1 ? "year" : "years",
      },
      {
        href: "/months",
        value: months,
        label: months === 1 ? "month" : "months",
      },
      {
        href: "/days",
        value: days,
        label: days === 1 ? "day" : "days",
      },
      {
        href: "/hours",
        value: hours,
        label: hours === 1 ? "hour" : "hours",
      },
      {
        href: "/minutes",
        value: minutes,
        label: minutes === 1 ? "minute" : "minutes",
      },
      {
        href: "/seconds",
        value: seconds,
        label: seconds === 1 ? "second" : "seconds",
      },
    ];
  }, [duration]);

  const showSection = useMemo(() => {
    return isAnimationDone && (duration?.seconds || duration?.seconds === 0);
  }, [isAnimationDone, duration]);

  return (
    <section
      className={`transition-opacity min-h-screen flex flex-col items-start justify-center max-w-lg w-full p-3 ${
        showSection ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-rose-300 text-sm flex justify-center items-center w-full -mt-10 mb-10">
        <span className="bg-rose-300 w-1/4 h-0.5" />
        {isMonthsary ? (
          <span className="w-1/2 text-center text-rose-800 text-2xl font-bold">
            {currentEvent.title}
            <div className="flex justify-center items-center gap-2 mt-2">
              <Link href={currentEvent.link}>
                <Mail size={40} strokeWidth={1.5} className="animate-bounce" />
              </Link>
            </div>
          </span>
        ) : (
          <span className="px-3 w-1/2 text-center">My Time With You</span>
        )}
        <span className="bg-rose-300 w-1/4 h-0.5" />
      </p>
      {timeUnits.map(({ href, value, label }) => (
        <Link
          key={href}
          href={href}
          className="text-rose-700 font-black text-6xl font-serif hover:text-rose-900"
        >
          {value} {label}
        </Link>
      ))}
    </section>
  );
}

export default React.memo(FirstSection);
