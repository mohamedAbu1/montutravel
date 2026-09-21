// app/layout.tsx
import "./style/globals.css";

import Providers from "./providers";

export const metadata = {
  title: "Montu Travel | Luxury Egyptian Journeys",
  icons: {
    icon: [{ url: "/icon.svg?v=montu", type: "image/svg+xml" }],
    shortcut: "/icon.svg?v=montu",
    apple: "/icon.svg?v=montu",
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
