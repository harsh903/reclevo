import type { Metadata } from "next";

import "./globals.css";
import Navigation from "../components/Navigation";

import Footer1 from "@/components/Footer1";
import { inter } from "@/utils/Fonts";

export const metadata: Metadata = {
  title: "Reclevo Infotech - Smart Waste Management Solutions",
  description:
    "Reclevo delivers smart waste management solutions powered by AI, IoT, and robotics. Helping municipalities and businesses across India streamline operations and achieve sustainability.",
  keywords:
    "waste management, smart waste, IoT, AI, robotics, India, Goa, municipal waste, sustainability, technology",
  icons: {
    icon: [
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white`}
      >
        <Navigation />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer1 />
      </body>
    </html>
  );
}
