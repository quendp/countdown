"use client";

import PageTransition from "@/utilities/PageTransition";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PoemTemplate({
  imagesObj,
  imageTitle,
  title,
  children,
}) {
  const [showImage, setShowImage] = useState(null);

  const images = useMemo(() => [
    { key: 'main', src: imagesObj?.main, shadow: 'shadow-md' },
    { key: 'right', src: imagesObj?.right, shadow: 'shadow-[3px_3px_6px_-1px]' },
    { key: 'left', src: imagesObj?.left, shadow: 'shadow-[-3px_3px_6px_-1px]' }
  ], [imagesObj]);

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
          <div className="images mt-10 mb-8 border-4 border-rose-300 rounded-lg p-2">
            {images.map(({ key, src, shadow }) => (
              <div
                key={key}
                className={`imageContainer ${key} ${showImage === src ? "showPoemImg" : ""}`}
              >
                <Image
                  className={`rounded-md ${shadow} shadow-rose-950`}
                  placeholder="blur"
                  blurDataURL="/blur.jpg"
                  src={src}
                  alt={`${key} pic`}
                  fill
                  onClick={() => {
                    setShowImage((prev) => (prev ? null : src));
                  }}
                />
              </div>
            ))}
          </div>
          <p className="font-light text-xs mb-5 text-center">&ldquo;{imageTitle}&rdquo;</p>
          <h1 className="font-serif text-rose-900 font-normal text-3xl mb-3 text-center">
            {title}
          </h1>
          <div className="font-normal text-sm text-center">{children}</div>
        </div>
      </main>
    </PageTransition>
  );
}
