"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Years() {
  const imagesObj = useMemo(
    () => ({
      main: "/years1.jpg",
      right: "/years2.jpg",
      left: "/years3.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Years"
      imageTitle="See you again in 8 years"
    >
      <p>For 8 long years we{"'"}ve been apart,</p>
      <p>We met again for a brand new start,</p>
      <p>An unexpected love that changed my life,</p>
      <p>Healed our scars and restored our hearts.</p>
    </PoemTemplate>
  );
}
