import { motion, AnimatePresence } from "framer-motion";
import { FaShareAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function SocialButtons({ showSocial, setShowSocial }) {
  const icons = [FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp];

  return (
    <>
      <motion.button
        onClick={() => setShowSocial((prev) => !prev)}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md shadow-blue-900/40"
      >
        <FaShareAlt className="text-cyan-300 text-xl" />
      </motion.button>

      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed bottom-20 left-6 z-50 flex flex-col gap-4"
          >
            {icons.map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md shadow-blue-900/40"
              >
                <Icon className="text-cyan-300 text-xl" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
