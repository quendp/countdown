"use client";

import PoemTemplate from "@/utilities/PoemPageTemplate";
import { useMemo } from "react";

export default function Hours() {
  const imagesObj = useMemo(
    () => ({
      main: "/hours3.jpg",
      right: "/hours2.jpg",
      left: "/hours1.jpg",
    }),
    []
  );

  return (
    <PoemTemplate
      imagesObj={imagesObj}
      title="Hours"
      imageTitle="An hour feels like a second with you"
    >
      <p>My head is full of thoughts in every hour,</p>
      <p>&quot;When will I see you again?&quot; and &quot;I miss you a lot&quot;.</p>
      <p>Time flies so fast, when we{"'"}re together,</p>
      <p>But slows down and stops when we{"'"}re apart {":<"} </p>
    </PoemTemplate>
  );
}
