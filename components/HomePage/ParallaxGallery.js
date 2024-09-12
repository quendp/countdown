import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * -0.8]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * -1.2]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * -0.4]
  );

  const resize = useCallback(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  const columns = useMemo(
    () => [
      { y, images: images.slice(0, 5).concat(images.slice(0, 10)) },
      { y: y2, images: images.slice(5, 10).concat(images.slice(5, 15)) },
      { y: y3, images: images.slice(10, 15).concat(images.slice(0, 10)) },
    ],
    [y, y2, y3]
  );

  return (
    <div className="parallaxGallery z-10">
      <div ref={gallery} className="gallery">
        <div className="galleryWrapper flex justify-center">
          {columns.map((column, index) => (
            <Column
              key={index}
              shownImage={shownImage}
              setShownImage={setShownImage}
              y={column.y}
              images={column.images}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Column = ({ images, y, shownImage, setShownImage, index }) => {
  const handleClick = useCallback(
    (src, index, i) => {
      setShownImage((prev) =>
        prev?.src === src ? null : { src: src, index: index, i: i }
      );
    },
    [setShownImage]
  );

  return (
    <motion.div className="column flex flex-col items-stretch" style={{ y }}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`${
            shownImage?.src === src &&
            index === shownImage?.index &&
            i === shownImage?.i
              ? "showImage grayscale-0"
              : "grayscale"
          } imageContainer p-1`}
        >
          <Image
            onClick={() => handleClick(src, index, i)}
            className="shadow-rose-500 cursor-pointer"
            src={`/${src}`}
            alt="image"
            width={260}
            height={300}
            placeholder="blur"
            blurDataURL="/blur.jpg"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};
