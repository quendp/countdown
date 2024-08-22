"use client";

import PageTransition from "@/utilities/PageTransition";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PoemTemplate({
  imagesObj,
  imageTitle,
  title,
  children,
}) {
  return (
    <PageTransition key="home">
      <main className="min-h-screen bg-rose-200 w-full flex justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-start max-w-lg w-full p-10 font-sans text-rose-800">
          <Link
            className="self-start flex mb-5 text-sm"
            href="/"
            onClick={() => {
              localStorage.setItem("noanimation", true);
            }}
          >
            <ChevronLeft size={18} /> Go Back
          </Link>
          <div className="images mb-10">
            <Image src={imagesObj?.main} alt="First pic" fill />
            <div className="imageContainer">
              <Image src={imagesObj?.right} alt="First pic" fill />
            </div>
            <div className="imageContainer">
              <Image src={imagesObj?.left} alt="First pic" fill />
            </div>
          </div>
          <p className="font-light text-xs mb-3 text-center">"{imageTitle}"</p>
          <h1 className="font-serif text-rose-900 font-normal text-3xl mb-3">
            {title}
          </h1>
          <div className="font-normal text-sm text-center">{children}</div>
        </div>
      </main>
    </PageTransition>
  );
}
