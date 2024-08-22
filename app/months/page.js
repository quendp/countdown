"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Months() {
  const imagesObj = useMemo(
    () => ({
      main: "/months1.jpg",
      right: "/months2.jpeg",
      left: "/months3.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Months"
      imageTitle="That One September"
    >
      <p>Months have passed but nothing changed,</p>
      <p>The laughter and joy remains the same,</p>
      <p>Though some months are dark and some are gray,</p>
      <p>When the new moon shines, we{"'"}ll find a way.</p>
    </PoemTemplate>
  );
}
