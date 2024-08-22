import { motion, useTransform } from "framer-motion";
import ParallaxGallery from "./ParallaxGallery";

export default function ThirdSection({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="min-h-screen overflow-hidden bg-rose-300 w-full relative rounded-lg"
    >
      <ParallaxGallery />
    </motion.section>
  );
}
