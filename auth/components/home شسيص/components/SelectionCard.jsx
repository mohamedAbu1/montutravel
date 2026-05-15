import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUsers, FaBed } from "react-icons/fa";
import { MdDateRange, MdCategory } from "react-icons/md";

export default function SelectionCard({
  destination,
  startDate,
  endDate,
  travelers,
  category,
  nights,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 backdrop-blur-md border border-white/20 
                 rounded-xl p-6 shadow-lg shadow-blue-900/40 
                 text-sm text-cyan-200 font-semibold space-y-4 w-full max-w-md"
    >
      <p className="text-lg font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-300 via-white to-cyan-400 text-center mb-4">
        ✨ Your Selection ✨
      </p>
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-cyan-300" />
        Destination: <span className="text-white">{destination}</span>
      </p>
      <p className="flex items-center gap-2">
        <MdDateRange className="text-cyan-300" />
        Check-in: <span className="text-white">{startDate?.toLocaleDateString()}</span>
      </p>
      <p className="flex items-center gap-2">
        <MdDateRange className="text-cyan-300" />
        Check-out: <span className="text-white">{endDate?.toLocaleDateString()}</span>
      </p>
      <p className="flex items-center gap-2">
        <FaUsers className="text-cyan-300" />
        Travelers: <span className="text-white">{travelers}</span>
      </p>
      <p className="flex items-center gap-2">
        <MdCategory className="text-cyan-300" />
        Category: <span className="text-white">{category}</span>
      </p>
      <p className="flex items-center gap-2">
        <FaBed className="text-cyan-300" />
        {nights} night{nights > 1 ? "s" : ""}
      </p>
    </motion.div>
  );
}
