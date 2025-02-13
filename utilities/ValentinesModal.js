import { Button } from "@mui/material";
import { useState } from "react";

export default function ValentinesModal({ setIsLocked }) {
  const [isYes, setIsYes] = useState(false);
  return (
    <section className="flex flex-col gap-2 justify-center items-center bg-rose-300 p-5 m-5 rounded-lg">
      <p>
        {isYes ? "Are you sure?" : "Will you be my valentine, Franzel Anne?"}
      </p>
      <div className="flex gap-2">
        <Button
          variant="contained"
          className="bg-rose-800 text-rose-300 self-end"
          sx={{
            backgroundColor: "#9f1239 !important",
            color: "#fecdd3 !important",
            marginTop: "15px",
          }}
          onClick={() => (isYes ? setIsLocked(false) : setIsYes(true))}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          className="bg-rose-300 text-rose-800 self-end"
          sx={{
            backgroundColor: "#9f1239 !important",
            color: "#fecdd3 !important",
            marginTop: "15px",
          }}
          onClick={() => (isYes ? setIsLocked(false) : setIsYes(true))}
        >
          Oo
        </Button>
      </div>
    </section>
  );
}
