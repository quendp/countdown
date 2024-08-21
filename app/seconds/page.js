"use client";

import PageTransition from "@/utilities/PageTransition";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Seconds() {
  return (
    <PageTransition key="home">
      <main className="min-h-screen bg-rose-200 w-full flex justify-center">
        <div className="flex flex-col items-center justify-start max-w-lg w-full p-10 font-sans text-rose-800">
          <Link
            className="self-start flex"
            href="/"
            onClick={() => {
              localStorage.setItem("noanimation", true);
            }}
          >
            <ChevronLeft /> Go Back
          </Link>
          <h1 className="font-serif text-rose-900 font-normal text-7xl mb-5">
            Seconds
          </h1>
          <Image
            className="rounded-md"
            src="/years1.jpg"
            alt="First pic"
            width={300}
            height={300}
          />
          <p className="font-light text-xs mb-5 text-center">
            First meet up after 8 years
          </p>
          <p className="font-normal text-md">
            Halos 8 years din tayong di nagkita no? Akalain mo yun, na sa dami
            dami nang nangyari sa buhay natin, tayo pa rin pala talaga sa dulo
            hahaha. Worth it ang ilang years ng paghihintay at character
            development dahil nakilala kita. Maraming taon pa yung pagsasamahan
            natin. Sana di ka magsawa hahahaha, at siyempre ganoon din ako.
            Nakakexcite yung mga mangyayari pa sa future haha, hintayin lang
            natin darating din yan. Mahal na mahal kita, Franzel.
          </p>
        </div>
      </main>
    </PageTransition>
  );
}
