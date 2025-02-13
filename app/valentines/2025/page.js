"use client";

import PageTransition from "@/utilities/PageTransition";
import ValentinesModal from "@/utilities/ValentinesModal";
import ValentinesSvgEffect from "@/utilities/ValentinesSvgEffect";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Valentines2025() {
  const [isLocked, setIsLocked] = useState(true);


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
            <ValentinesModal setIsLocked={setIsLocked} />
          ) : (
            <div className="overflow-hidden w-screen h-screen">
              <ValentinesSvgEffect />
            </div>
          )
        }
      </main>
    </PageTransition>
  );
}
