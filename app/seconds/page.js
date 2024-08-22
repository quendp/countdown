"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Seconds() {
  const imagesObj = useMemo(
    () => ({
      main: "/seconds1.jpg",
      right: "/seconds2.jpg",
      left: "/seconds3.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Seconds"
      imageTitle="To grow old with you"
    >
      <p>In each second I get to spend with you,</p>
      <p>I tell my self that love is true,</p>
      <p>I may not be perfect, and sometimes mean,</p>
      <p className="mb-5"> But I{"'"}ll be better for you my queen.</p>
      <p>As we venture this unfair world of ours,</p>
      <p>
        We{"'"}ll grow and age in each other{"'"} arms,
      </p>
      <p>Holding you even in our subsequent lives,</p>
      <p>Because even time itself cannot do as part.</p>
    </PoemTemplate>
  );
}
