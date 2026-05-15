import { motion } from "framer-motion";
import Image from "next/image";

export default function CloudBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: -1 }}
      transition={{ duration: 1.2 }}
      className="absolute bottom-0 w-full h-[200px] -z-10"
    >
      <Image
        src="/assets/Copilot_20251201_134057.webp"
        alt="Realistic Cloud"
        fill
        quality={100}
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
