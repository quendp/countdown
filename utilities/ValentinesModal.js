import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import delay from "./delay";

export default function ValentinesModal({ setIsLocked }) {
  const [isYes, setIsYes] = useState(false);
  const [opacity, setOpacity] = useState(100);

  const hideModal = useCallback(async () => {
    if (isYes) {
      setOpacity(0);
      await delay(2000);
      setIsLocked(false);
    } else {
      setIsYes(true);
    }
  }, [isYes, setIsLocked, setIsYes]);

  return (
    <section
      className={`flex flex-col gap-2 justify-center items-center bg-rose-300 p-5 m-5 mt-10 rounded-lg transition-opacity opacity-${opacity}`}
    >
      <p>
        {isYes
          ? "Are you sure? Walang bawian haa hahaaha."
          : "Will you be my valentine, Franzel Anne?"}
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
          onClick={hideModal}
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
          onClick={hideModal}
        >
          Of course
        </Button>
      </div>
    </section>
  );
}
