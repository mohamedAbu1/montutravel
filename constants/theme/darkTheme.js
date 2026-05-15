const DarkTheme = {
  name: "dark",

  // خلفية زجاجية داكنة
  background: "bg-[rgba(15,15,15,0.95)] backdrop-blur-[18px]",

  // النصوص الأساسية
  text: "text-[#ededed]", // أبيض فاتح

  // النصوص الثانوية
  subText: "text-[rgba(255,255,255,0.6)]", // رمادي شفاف

  // العناوين الرئيسية
  title: "text-[#22d3ee] font-extrabold tracking-wide", // Cyan Glow

  // العناوين الثانوية
  heading: "text-[#60a5fa] font-semibold", // Blue فاتح

  // الكروت الزجاجية
  card: "bg-[rgba(30,30,30,0.85)] backdrop-blur-[14px] rounded-[18px] border border-[rgba(34,211,238,0.45)]",

  // شعار
  logoGradientFrom: "#06b6d4", // Cyan
  logoGradientTo: "#3b82f6",   // Blue
  logoBorder: "#22d3ee",

  // طبقة فوق الصور
  overlay: "bg-[rgba(0,0,0,0.2)]",
  Cardoverlay: "bg-[rgba(0,0,0,0.2)]",

  // الظلال
  shadow: "shadow-[0_6px_20px_rgba(0,0,0,0.6),0_0_12px_rgba(34,211,238,0.4)]",

  // الأزرار الأساسية
  buttonPrimary:
    "bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-semibold rounded-xl px-6 py-3 hover:from-[#22d3ee] hover:to-[#60a5fa] transition-all shadow-md hover:shadow-lg",

  // الأزرار الثانوية
  buttonSecondary:
    "bg-[rgba(20,20,20,0.85)] text-[#ededed] font-medium rounded-xl px-6 py-3 hover:bg-[rgba(40,40,40,0.9)] transition-all border border-[#22d3ee]",

  // الأيقونات
  icon: "text-[#22d3ee]",
  iconInactive: "text-[#6b6b6b]",
    // LightTheme
dividerLine: "bg-[#22d3ee]/50 opacity-30",
dividerIcon: "text-[#22d3ee]",
  iconHover: "text-[#60a5fa] transition-colors",
};
export default DarkTheme;
