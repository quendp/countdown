"use client";

import PageTransition from "@/utilities/PageTransition";
import ValentinesModal from "@/utilities/ValentinesModal";
import ValentinesSvgEffect from "@/utilities/ValentinesSvgEffect";
import { Button } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Valentines2025() {
  const router = useRouter();
  const [isLocked, setIsLocked] = useState(true);

  return (
    <PageTransition key="home">
      <main className="sceneContainer">
        <Link
          className="self-start flex items-center gap-2 mb-5 text-xs font-sans p-3 text-rose-300 hover:text-rose-200 hover:bg-rose-950/20 rounded-lg transition-colors relative z-10 cursor-pointer"
          href="/"
          onClick={() => {
            localStorage.setItem("noanimation", true);
          }}
        >
          <ChevronLeft size={18} /> Go Back
        </Link>
        {isLocked ? (
          <div className="flex justify-center items-center h-full">
            <ValentinesModal setIsLocked={setIsLocked} />
          </div>
        ) : (
          <div className="relative overflow-hidden w-screen h-screen">
            <ValentinesSvgEffect />
            <Button
              variant="contained"
              className="bg-rose-300 text-rose-800 fixed bottom-20 right-1/2 translate-x-1/2 z-50"
              sx={{
                backgroundColor: "#fecdd3 !important",
                color: "#9f1239 !important",
                marginTop: "15px",
              }}
              onClick={() => router.push("/valentines/2025/message")}
            >
              Next
            </Button>
          </div>
        )}
      </main>
    </PageTransition>
  );
}
