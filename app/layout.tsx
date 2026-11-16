import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import { HeaderController } from "@/components/HeaderController";
import { SigilSprite } from "@/components/SigilSprite";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Justine J. Mauricio, web developer and AI automation builder",
  description:
    "Portfolio of Mark Justine J. Mauricio, an early-career web developer and AI automation builder in Antipolo. Eight builds, real status, and case files.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body id="top">
        <SigilSprite />
        <HeaderController />
        {children}
      </body>
    </html>
  );
}
