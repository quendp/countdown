"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Days() {
  const imagesObj = useMemo(
    () => ({
      main: "/day1.jpg",
      right: "/day2.jpeg",
      left: "/day3.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Days"
      imageTitle="Magkamukha na tayo HAHAHAHAHA"
    >
      <p>You are my first thought when my day starts,</p>
      <p>You are also the last one as I sleep at night,</p>
      <p>Some days are cold, some days are tough,</p>
      <p>Each day is worth it, with my other half.</p>
    </PoemTemplate>
  );
}
