import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transliterated Arabic: How to write in Franco / Arabizi / Arabish",
  description: "A guide to transliterating Arabic using the Latin script and numbers.",
  keywords: "Franco-Arabic, Arabizi, Arabish, Arabeezi, Arabic chat alphabet, transliteration, Latin script, Arabic, communication, online, informal, dialects, chat, text, SMS, social media, internet, keyboard, writing, guide, examples, learn, tutorial", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
