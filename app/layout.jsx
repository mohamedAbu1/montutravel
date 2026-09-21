// app/layout.tsx
import "./style/globals.css";

import Providers from "./providers";

export const metadata = {
  title: "Montu Travel | Luxury Egyptian Journeys",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
