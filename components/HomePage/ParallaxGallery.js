import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useRef } from "react";

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
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * -2.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -1.5]);

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

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className="imageContainer p-2">
            <Image
              className="rounded-lg shadow-lg shadow-rose-950"
              src={`/${src}`}
              alt="image"
              width={110}
              height={130}
              placeholder="blur"
              blurDataURL="/blur.jpg"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
