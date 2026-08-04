const LightTheme = {
  name: "light",

  // خلفية زجاجية شفافة مع الأبيض
  background: "bg-[rgba(255,255,255,0.35)] backdrop-blur-[20px]",

  // النصوص الأساسية
  text: "text-[#a855f7]", // بنفسجي قوي
  subText: "text-[#6b21a8]", // وردي مرِح (Pink 500)

  // العناوين الرئيسية
  title: "text-[#06b6d4] font-extrabold tracking-wide", // تركواز مشرق
  heading: "text-[#a855f7] font-semibold", // Purple 500
  pictext: "text-[#FFFFFF] font-semibold",

  // الكروت الزجاجية
  card: "bg-[rgba(255,255,255,0.2)] backdrop-blur-[16px] rounded-[16px] border border-[#06b6d4]/60 shadow-lg",

  // طبقة فوق الصور
  overlay: "bg-[rgba(168,85,247,0.25)]", // طبقة بنفسجية شفافة

  // الأزرار الأساسية
  buttonPrimary:
    "bg-gradient-to-r from-[#a855f7] to-[#6b21a8] text-white font-semibold rounded-xl px-6 py-3 shadow-md hover:from-[#9333ea] hover:to-[#db2777] transition-all tracking-wide uppercase",

  // الأزرار الثانوية
  buttonSecondary:
    "bg-[rgba(255,255,255,0.25)] backdrop-blur-[12px] text-[#1E1E2F] font-medium rounded-xl px-6 py-3 hover:bg-[rgba(255,255,255,0.35)] transition-all border border-[#06b6d4]/60",

  // الحدود
  border: "border border-[rgba(168,85,247,0.5)] rounded-[16px]",

  // الظلال
  shadow: "shadow-[0_4px_20px_rgba(0,0,0,0.15)]",

  // شعار
  logoGradientFrom: "#a855f7", // Purple
  logoGradientTo: "#06b6d4",  // Turquoise
  logoBorder: "#6b21a8",      // Pink Accent

  // الحقول
  inputText: "#1E1E2F", // رمادي داكن أنيق
  inputBorder: "#06b6d4",
  inputFocus: "#a855f7",
  inputHoverBg: "rgba(255,255,255,0.25)",
  inputLabel: "#6b21a8",

  // الأيقونات
  icon: "text-[#06b6d4]", // تركواز
  iconInactive: "text-[#9E9E9E]",
  iconHover: "text-[#a855f7] transition-colors",

  // ألوان إضافية
  ivory: "bg-[rgba(255,255,255,0.25)] backdrop-blur-[12px]",
  lavender: "text-[#c084fc]",
  purple: "text-[#a855f7]",
  pink: "text-[#6b21a8]",
  turquoise: "text-[#06b6d4]",
  darkGray: "text-[#1E1E2F]",
};
export default LightTheme;
