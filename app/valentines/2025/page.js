"use client";

import PageTransition from "@/utilities/PageTransition";
import ValentinesModal from "@/utilities/ValentinesModal";
import ValentinesSvgEffect from "@/utilities/ValentinesSvgEffect";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Valentines2025() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <PageTransition key="home">
      <main className="sceneContainer">
        <div className="flex justify-between items-center">
          <Link
            className="self-start flex items-center gap-2 mb-5 text-xs font-sans p-3 text-rose-300 hover:text-rose-200 hover:bg-rose-950/20 rounded-lg transition-colors relative z-10 cursor-pointer"
            href="/"
            onClick={() => {
              localStorage.setItem("noanimation", true);
            }}
          >
            <ChevronLeft size={18} /> Go Back
          </Link>
          {!isLocked && (
            <Link
              className="self-start flex items-center gap-2 mb-5 text-xs font-sans p-3 text-rose-300 hover:text-rose-200 hover:bg-rose-950/20 rounded-lg transition-colors relative z-10 cursor-pointer"
              href="/valentines/2025/message"
              onClick={() => {
                localStorage.setItem("noanimation", true);
              }}
            >
              Next
              <ChevronRight size={18} className="" />
            </Link>
          )}
        </div>
        {isLocked ? (
          <div className="flex justify-center items-center h-1/2">
            <ValentinesModal setIsLocked={setIsLocked} />
          </div>
        ) : (
          <div className="relative overflow-hidden w-screen h-screen">
            <p className="text-center text-sm text-rose-300 font-sans text- absolute top-10 left-1/2 -translate-x-1/2 z-50 italic">
              To my love <br/>Franzel Anne,
            </p>
            <ValentinesSvgEffect />
          </div>
        )}
      </main>
    </PageTransition>
  );
}
