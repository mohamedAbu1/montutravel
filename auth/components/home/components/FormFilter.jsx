"use client";
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import { ToastContainer } from "react-toastify";
import { addDays } from "date-fns";
import { useTheme } from "@/context/ThemeContext";

export default function SearchForm({
  destination,
  setDestination,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  category,
  setCategory,
  isFormComplete,
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className={`hidden p-6 rounded-2xl w-full max-w-5xl md:flex flex-col md:flex-row md:flex-wrap gap-6 
                  ${theme.background} ${theme.card} ${theme.shadow}`}
    >
      {/* الوجهة */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label className={`text-base font-semibold tracking-wide mb-2 ${theme.title}`}>
          Destination
        </label>
        <TextField
          select
          variant="filled"
          fullWidth
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          InputProps={{
            style: {
              color: theme.textColor || "var(--text)",
              backgroundColor: "var(--card-bg)",
              borderRadius: "12px",
              backdropFilter: "blur(var(--card-blur))",
            },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: "var(--card-bg)",
                  border: `1px solid var(--card-border)`,
                  color: theme.textColor || "var(--text)",
                },
              },
            },
          }}
        >
          <MenuItem value="Cairo">Cairo</MenuItem>
          <MenuItem value="Alexandria">Alexandria</MenuItem>
          <MenuItem value="Luxor">Luxor</MenuItem>
          <MenuItem value="Aswan">Aswan</MenuItem>
          <MenuItem value="Sharm El-Sheikh">Sharm El-Sheikh</MenuItem>
          <MenuItem value="Hurghada">Hurghada</MenuItem>
        </TextField>
      </div>

      {/* الوصول */}
      <div className="flex-1 min-w-[200px] flex flex-col z-50">
        <label className={`text-base font-semibold tracking-wide mb-2 ${theme.title}`}>
          Check-in
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select arrival date"
          minDate={addDays(new Date(), 2)}
          className={`z-[5] w-full px-4 py-5 rounded-2xl text-sm ${theme.text} ${theme.card} 
                      transition-all duration-300 focus:outline-none placeholder:text-white/70`}
          dayClassName={() =>
            `rounded-md px-2 py-1 transition hover:bg-[${theme.iconHover}] hover:text-white`
          }
        />
      </div>

      {/* المغادرة */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label className={`text-base font-semibold tracking-wide mb-2 ${theme.title}`}>
          Check-out
        </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select departure date"
          minDate={addDays(new Date(), 2)}
          className={`w-full px-4 py-5 rounded-2xl text-sm ${theme.text} ${theme.card} 
                      transition-all duration-300 focus:outline-none placeholder:text-white/70`}
          dayClassName={() =>
            `rounded-md px-2 py-1 transition hover:bg-[${theme.iconHover}] hover:text-white`
          }
        />
      </div>

      {/* التصنيف */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label className={`text-base font-semibold tracking-wide mb-2 ${theme.title}`}>
          Category
        </label>
        <TextField
          select
          variant="filled"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          InputProps={{
            style: {
              color: theme.textColor || "var(--text)",
              backgroundColor: "var(--card-bg)",
              borderRadius: "12px",
              backdropFilter: "blur(var(--card-blur))",
            },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: "var(--card-bg)",
                  border: `1px solid var(--card-border)`,
                  color: theme.textColor || "var(--text)",
                },
              },
            },
          }}
        >
          <MenuItem value="Cultural">Cultural</MenuItem>
          <MenuItem value="Nile">Nile</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
        </TextField>
      </div>

      {/* زر البحث */}
      <div className="flex-1 w-full flex items-end">
        <Button
          variant="contained"
          disabled={!isFormComplete}
          className={isFormComplete ? theme.buttonPrimary : theme.buttonSecondary}
        >
          Search
        </Button>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.div>
  );
}
