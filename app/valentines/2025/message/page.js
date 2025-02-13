"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Valentines2025Message() {
  const imagesObj = useMemo(
    () => ({
      main: "/valentines/2025/a.jpg",
      right: "/valentines/2025/b.jpg",
      left: "/valentines/2025/c.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Happy Valentine&apos;s day babyyy!"
      imageTitle="You will always be my Valentine."
    >
      <p className="text-left mb-5">
        Happy Valentine&apos;s Day my love! I love you so much and I&apos;m so happy to be
        your partner. I&apos;ll always be here for you love. I hope matupad natin
        lahat ng goals natin. I&apos;m sure dadating din tayo diyann, konteng tiis na
        lang. I can&apos;t wait to see you again love! I love you!
      </p>
      <p className="text-left mb-2">
        P.S. Wag ka na magtampo! HAHAHAHAH
      </p>
    </PoemTemplate>
  );
}
