import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "day1.jpg",
  "day2.jpg",
  "day3.jpg",
  "hours1.jpg",
  "hours2.jpg",
  "hours3.jpg",
  "minutes1.jpg",
  "minutes2.jpg",
  "minutes3.jpg",
  "months1.jpg",
  "months2.jpg",
  "months3.jpg",
  "seconds1.jpg",
  "seconds2.jpg",
  "seconds3.jpg",
];

export default function ParallaxGallery() {
  const [shownImage, setShownImage] = useState(null);
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * -0.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -1.2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.4]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="parallaxGallery z-10">
      <div className="spacer"></div>
      <div ref={gallery} className="gallery">
        <div className="galleryWrapper flex justify-center">
          <Column
            shownImage={shownImage}
            setShownImage={setShownImage}
            y={y}
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
            ]}
          />
          <Column
            shownImage={shownImage}
            setShownImage={setShownImage}
            y={y2}
            images={[
              images[5],
              images[6],
              images[7],
              images[8],
              images[9],
              images[5],
              images[6],
              images[7],
              images[8],
              images[9],
            ]}
          />
          <Column
            shownImage={shownImage}
            setShownImage={setShownImage}
            y={y3}
            images={[
              images[10],
              images[11],
              images[12],
              images[13],
              images[14],
              images[10],
              images[11],
              images[12],
              images[13],
              images[14],
            ]}
          />
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

const Column = ({ images, y, shownImage, setShownImage }) => {
  return (
    <motion.div className="column flex flex-col items-center" style={{ y }}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${
            shownImage === src ? "showImage" : ""
          } imageContainer p-2`}
        >
          <Image
            onClick={() => {
              setShownImage((prev) => (prev === src ? null : src));
            }}
            className="rounded-lg shadow-[3px_3px_8px_-1px] shadow-rose-500 cursor-pointer"
            src={`/${src}`}
            alt="image"
            width={260}
            height={300}
            placeholder="blur"
            blurDataURL="/blur.jpg"
          />
        </div>
      ))}
    </motion.div>
  );
};
