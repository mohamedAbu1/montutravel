import { motion, AnimatePresence } from "framer-motion";

export default function ScrollTopButton({ showScrollTop }) {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     shadow-lg shadow-blue-900/40 text-cyan-300"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
