"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Anniversary1() {
  const imagesObj = useMemo(
    () => ({
      main: "/anniversary/1/a.jpg",
      right: "/anniversary/1/b.jpg",
      left: "/anniversary/1/c.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Happy first anniversary my love!"
      imageTitle="First Anniversary"
    >
      <p className="text-left mb-2">
        Grabe, 1 year na agad tayooo🩷 Sobrang bilis ng oras. parang dati,
        nagbibiro lang tayo na di natin mamamalayan anniversary na pala natin,
        pero ngayong nagkatotoo na nga hahaha. Di ko madescribe kung gaano ako
        kasaya na umabot tayo sa puntong to. Napakaswerte ko sayo love, ikaw
        yung best girlfriend sa buong mundo. The best I could ever wish for. My
        ideal girl and future wife.
      </p>
      <p className="text-left">
        Sana walang magbago satin love, and if meron man, sana lumakas lang tayo
        lalo. Andito lang ako palagi para sayo love. Hinding hindi kita iiwan.
        Alam kong marami pa tayong pagsasamahan kaya sana di ka magsawa
        HAHAHAHA. I love you soo muchh Franzel Anne. I wish for more
        anniversaries to come for both of us. Mahal na mahal kita.
      </p>
    </PoemTemplate>
  );
}
