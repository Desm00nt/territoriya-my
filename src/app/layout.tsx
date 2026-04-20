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
  title: "Лесная Тропа — Детский летний лагерь",
  description: "Лучший детский летний лагерь в сосновом лесу. Творчество, спорт, приключения и незабываемые впечатления для детей от 7 до 15 лет.",
  keywords: ["детский лагерь", "летний лагерь", "отдых для детей", "летний отдых", "детскийcamp"],
  icons: {
    icon: "/camp-logo.png",
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
