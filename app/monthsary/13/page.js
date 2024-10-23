"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import Link from "next/link";
import { useMemo } from "react";

export default function Monthsary13() {
  const imagesObj = useMemo(
    () => ({
      main: "/monthsary/13/a.jpg",
      right: "/monthsary/13/b.jpg",
      left: "/monthsary/13/c.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Happy 13th Monthsary my love!"
      imageTitle="Our second October"
    >
      <p className="text-left mb-2">
        Happy 13th month my Franzel Anne💖 Second October na natin to and I am
        super excited to spend more time with you. Walang araw na hindi mo ko
        napangiti. Wag ka sana mafall out of love HAHAHAHA. Goodluck palagi sa
        studies mo, of course andito lang ako palagi para isupport ka sa kahit
        anong bagay. Ingatan mo rin lagi health mo haa, I know di ka magccheat,
        so sana wag ka na lang mamatai HAHAHAH. Yun lang babyy, baka nagsasawa
        ka na sa mga message ko so di ko na hahabaan ng sobra HAHAAHAHA. Sobrang
        proud ako sayo Franzel, I love you🩷
      </p>
      <p className="text-left mb-2">
        Masyado na ba akong mukhang mabait today? HAHAHAHA siyempre di pwede
        mawala yung kalokohan satin so I have something special for you na para
        sayo lang🤭
      </p>
      <div className="flex justify-center items-center gap-2 mt-2">
        <Link
          href={"/games/quiz-1"}
          className="flex items-center justify-center text-xs gap-1 font-light bg-rose-300 rounded-md w-full text-rose-900 hover:bg-rose-400 p-1 py-3"
        >
          🩷 Click Here 🩷
        </Link>
      </div>
    </PoemTemplate>
  );
}
