import { motion } from "framer-motion";
import Image from "next/image";
import FormFilter from "./FormFilter";
import {eagleLogo} from "@/constants/images"
export default function LogoSection() {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
      className="flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10, y: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={eagleLogo}
          alt="Flower of Life Eagle"
          width={520}
          height={280}
          priority
          quality={100}
        />
      </motion.div>

      <FormFilter />

     
    </motion.div>
  );
}

