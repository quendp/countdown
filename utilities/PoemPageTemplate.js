"use client";

import PageTransition from "@/utilities/PageTransition";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PoemTemplate({
  imagesObj,
  imageTitle,
  title,
  children,
}) {
  const [showImage, setShowImage] = useState(null);
  return (
    <PageTransition key="home">
      <main className="poemTemplate min-h-screen bg-rose-200 w-full flex justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-start max-w-lg w-full p-5 font-sans text-rose-800">
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
            <Image
              className={`rounded-md shadow-md shadow-rose-950 main ${
                showImage === imagesObj?.main ? "showPoemImg" : ""
              }`}
              placeholder="blur"
              blurDataURL="/blur.jpg"
              src={imagesObj?.main}
              alt="First pic"
              fill
              onClick={() => {
                setShowImage((prev) => (prev ? null : imagesObj?.main));
              }}
            />
            <div className="imageContainer">
              <Image
                className={`rounded-md shadow-[3px_3px_6px_-1px] shadow-rose-950 ${
                  showImage === imagesObj?.right ? "showPoemImg" : ""
                } right`}
                placeholder="blur"
                blurDataURL="/blur.jpg"
                src={imagesObj?.right}
                alt="First pic"
                onClick={() => {
                  setShowImage((prev) => (prev ? null : imagesObj?.right));
                }}
                fill
              />
            </div>
            <div className="imageContainer">
              <Image
                className={`rounded-md shadow-[-3px_3px_6px_-1px] shadow-rose-950 left ${
                  showImage === imagesObj?.left ? "showPoemImg" : ""
                }`}
                placeholder="blur"
                blurDataURL="/blur.jpg"
                src={imagesObj?.left}
                onClick={() => {
                  setShowImage((prev) => (prev ? null : imagesObj?.left));
                }}
                alt="First pic"
                fill
              />
            </div>
          </div>
          <p className="font-light text-xs mb-10 text-center">"{imageTitle}"</p>
          <h1 className="font-serif text-rose-900 font-normal text-3xl mb-3">
            {title}
          </h1>
          <div className="font-normal text-sm text-center">{children}</div>
        </div>
      </main>
    </PageTransition>
  );
}
