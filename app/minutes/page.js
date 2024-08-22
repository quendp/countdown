"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Minutes() {
  const imagesObj = useMemo(
    () => ({
      main: "/minutes1.jpg",
      right: "/minutes2.jpg",
      left: "/minutes3.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Minutes"
      imageTitle="Napakaganda ng ngiti mo :>"
    >
      <p>As each minute passes by,</p>
      <p>You never fail to make me smile,</p>
      <p>My motivation to move forward,</p>
      <p className="mb-5">To always try and try.</p>
      <p>I hope you feel the same,</p>
      <p>Because I{"'"}m always by your side,</p>
      <p>Giving you all my minute,.</p>
      <p>Sharing you all my time.</p>
    </PoemTemplate>
  );
}
