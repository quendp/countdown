"use client";

import delay from "@/utilities/delay";
import PageTransition from "@/utilities/PageTransition";
import ValentinesModal from "@/utilities/ValentinesModal";
import ValentinesSvgEffect from "@/utilities/ValentinesSvgEffect";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";


export default function Valentines2025() {
  const [isLocked, setIsLocked] = useState(true);
  const [opacity, setOpacity] = useState(0);

  const handleUnlock = useCallback(async (value) => {
    setIsLocked(value);
    await delay(2000);
    setOpacity(100);
  }, [setIsLocked, setOpacity]);

  return (
    <PageTransition key="home">
      <main className="sceneContainer">
        <Link
          className="self-start flex items-center gap-2 mb-5 text-xs font-sans p-3 text-rose-300 hover:text-rose-200 hover:bg-rose-950/20 rounded-lg transition-colors relative z-10 cursor-pointer"
          href="/"
          onClick={() => {
            localStorage.setItem("noanimation", true);
          }}
        >
          <ChevronLeft size={18} /> Go Back
        </Link>
        {
          isLocked ? (
            <div className="flex justify-center items-center h-full">
              <ValentinesModal setIsLocked={handleUnlock} />
            </div>
          ) : (
            <div className={`overflow-hidden w-screen h-screen transition-opacity opacity-${opacity}`}>
              <ValentinesSvgEffect />
            </div>
          )
        }
      </main>
    </PageTransition>
  );
}
