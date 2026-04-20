import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Территория МЫ — Республиканский интеллектуально-психологический лагерь | Лето 2026",
  description: "1-е место в рейтинге лагерей РТ. 27 лет опыта. Квесты, ролевые игры, психология отношений, профориентация, English Camp. 4 летние смены 2026 года в ГК Регина (Мамадыш).",
  keywords: ["Территория МЫ", "РИПЛ", "детский лагерь Казань", "летний лагерь Татарстан", "лагерь Мамадыш", "интеллектуальный лагерь", "психологический лагерь"],
  icons: {
    icon: "/tm-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
