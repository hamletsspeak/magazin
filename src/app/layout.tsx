

import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "MAGAZIN | Геймерский магазин",
  description: "Адаптивный интернет-магазин с геймерской эстетикой, неоновыми акцентами и RGB-анимацией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className="antialiased min-h-screen bg-black text-red-500 font-gamer flex flex-col"
        style={{
          background: "var(--background)",
          color: "var(--accent)",
        }}
      >
        <Header />
        <main className="flex-1 w-full flex flex-col items-center justify-center">
          {children}
        </main>
  <Footer />
  <Analytics />
  <SpeedInsights />
      </body>
    </html>
  );
}
