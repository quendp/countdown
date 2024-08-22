"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Seconds() {
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
      title="Seconds"
      imageTitle="See you again in 8 years"
    >
      <p>60 seconds in a minute, 60 minutes in an hour.</p>
      <p>24 hours in a day, 30 days in a month.</p>
      <p>12 months in year, never feels enough.</p>
      <p>As we venture this unfair world of ours,</p>
      <p>We{"'"}ll grow and age in each other{"'"} arms,</p>
      <p>All my seconds are for you, ,</p>
      <p>You are my rest, for the rest of my life.</p>
    </PoemTemplate>
  );
}
