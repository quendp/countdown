"use client";

import Quiz1 from "@/components/Games/Quiz1";
import PageTransition from "@/utilities/PageTransition";
import { Button, TextField } from "@mui/material";
import { ChevronLeft, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Quiz1Page() {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [isPassInvalid, setIsPassInvalid] = useState(false);

  const handleSubmit = () => {
    if (password.toLowerCase() === process.env.NEXT_PUBLIC_QUIZ_1_PASS) {
      setIsLocked(false);
      setIsPassInvalid(false);
    } else {
      setIsPassInvalid(true);
    }
  };

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
          {isLocked ? (
            <div className="min-h-80 w-full flex flex-col items-center justify-center">
              <Lock
                size={40}
                strokeWidth={1.5}
                className="animate-bounce mb-5"
              />
              <p className="text-xs w-full">Hint: name of our teddy bear🐻</p>
              <TextField
                sx={{
                  label: { color: "#9f1239 !important" },
                  input: {
                    color: "#9f1239 !important",
                  },
                }}
                className="w-full my-3 "
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={isPassInvalid}
                helperText={
                  isPassInvalid ? "Wrong password teh sino ka HAHAHAAH" : ""
                }
              />
              <Button
                variant="contained"
                className="bg-rose-800 text-rose-200 self-end"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          ) : (
            <Quiz1 />
          )}
        </div>
      </main>
    </PageTransition>
  );
}
