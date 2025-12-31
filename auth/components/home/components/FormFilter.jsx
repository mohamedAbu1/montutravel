"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, TextField, MenuItem } from "@mui/material";
import { addDays } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowSize from "@/components/hook/UseWindowSize";
import { useAppFun } from "@/context/AppFun";
const FormFilter = () => {
  const { width, height } = useWindowSize();
  const {
    destination,
    setDestination,
    category,
    setCategory,
    travelers,
    setTravelers,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useAppFun();

  // حساب عدد الليالي
  const isFormComplete =
    destination && startDate && endDate && travelers && category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="hidden bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full max-w-5xl
             md:flex flex-col md:flex-row md:flex-wrap gap-6 text-white
             border border-white/20 shadow-xl shadow-blue-900/40
             ring-1 ring-white/10"
    >
      {/* الوجهة */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label
          className="text-base font-semibold tracking-wide text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-2"
        >
          Destination
        </label>
        <TextField
          select
          variant="filled"
          fullWidth
          placeholder="Select your destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                },
              },
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
              "&.Mui-focused": {
                border: "1px solid rgba(6,182,212,0.6)",
                boxShadow: "0 0 12px rgba(6,182,212,0.5)",
              },
            },
            "& .MuiMenu-paper": {
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
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
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label
          className="text-base font-semibold tracking-wide text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-2"
        >
          Check-in
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select arrival date"
          minDate={addDays(new Date(), 2)}
          className="w-full px-4 py-5 rounded-2xl text-sm text-white 
                 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] 
                 backdrop-blur-md shadow-[0_4px_1px_rgba(0,0,0,0.3)] 
                 transition-all duration-300 focus:outline-none 
                 placeholder:text-white/70 hover:bg-[rgba(255,255,255,0.1)]
                 focus:border-[rgba(6,182,212,0.6)] focus:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          calendarClassName="!bg-white/10 !backdrop-blur-md !border !border-white/30 
                         !rounded-xl !p-4 !shadow-lg !text-white"
          dayClassName={() =>
            "rounded-md px-2 py-1 transition hover:bg-cyan-400/40 hover:text-white"
          }
        />
      </div>

      {/* المغادرة */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label
          className="text-base font-semibold tracking-wide text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-2"
        >
          Check-out
        </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select arrival date"
          minDate={addDays(new Date(), 2)}
          className="w-full px-4 py-5 rounded-2xl text-sm text-white 
                 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] 
                 backdrop-blur-md shadow-[0_4px_1px_rgba(0,0,0,0.3)] 
                 transition-all duration-300 focus:outline-none 
                 placeholder:text-white/70 hover:bg-[rgba(255,255,255,0.1)]
                 focus:border-[rgba(6,182,212,0.6)] focus:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          calendarClassName="!bg-white/10 !backdrop-blur-md !border !border-white/30 
                         !rounded-xl !p-4 !shadow-lg !text-white"
          dayClassName={() =>
            "rounded-md px-2 py-1 transition hover:bg-cyan-400/40 hover:text-white"
          }
        />
      </div>

      <div className="flex-1 min-w-[200px] flex flex-col">
        <label
          className="text-base font-semibold tracking-wide text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-2"
        >
          Travelers
        </label>
        <TextField
          type="number"
          variant="filled"
          fullWidth
          placeholder="Number of travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          InputLabelProps={{ style: { color: "#fff" } }}
          inputProps={{
            min: 1,
            max: 100,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              "&.Mui-focused": {
                border: "1px solid rgba(6,182,212,0.6)",
                boxShadow: "0 0 12px rgba(6,182,212,0.5)",
              },
            },
            "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
            "& input[type=number]": { MozAppearance: "textfield" },
          }}
        />
      </div>

      {/* Category */}
      <div className="flex-1 min-w-[200px] flex flex-col">
        <label
          className="text-base font-semibold tracking-wide text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-2"
        >
          Category
        </label>
        <TextField
          select
          variant="filled"
          fullWidth
          placeholder="Select category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            style: {
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                },
              },
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
              "&.Mui-focused": {
                border: "1px solid rgba(6,182,212,0.6)",
                boxShadow: "0 0 12px rgba(6,182,212,0.5)",
              },
            },
            "& .MuiMenu-paper": {
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
            },
          }}
        >
          <MenuItem value="Cultural">Cultural</MenuItem>
          <MenuItem value="Nile">Nile</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
        </TextField>
      </div>

      {/* Search Button */}
      <div className="flex-1 min-w-[200px] flex items-end">
        <Button
          variant="contained"
          disabled={!isFormComplete}
          sx={{
            width: "100%",
            height: "56px",
            backgroundImage: isFormComplete
              ? "linear-gradient(90deg, #22d3ee, #ffffff, #22d3ee)"
              : "none",
            backgroundColor: !isFormComplete
              ? "rgba(255, 255, 255, 0.1)"
              : "transparent",
            backgroundSize: isFormComplete ? "200% 200%" : "auto",
            animation: isFormComplete
              ? "gradientMove 3s ease infinite"
              : "none",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: isFormComplete ? "#000" : "rgba(255,255,255,0.5)",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: isFormComplete
              ? "0 6px 16px rgba(0, 0, 0, 0.4)"
              : "0 4px 12px rgba(0,0,0,0.3)",
            textTransform: "uppercase",
            transition: "all 0.4s ease",
            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
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
};

export default FormFilter;
