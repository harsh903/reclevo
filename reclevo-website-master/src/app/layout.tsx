import type { Metadata } from "next";

import "./globals.css";
import Navigation from "../components/Navigation";

import Footer1 from "@/components/Footer1";
import { outfit } from "@/utils/Fonts";

export const metadata: Metadata = {
  title: "Reclevo Infotech - Driving Innovation in Waste Management",
  description:
    "Transform waste management in India through technology-driven solutions and collaborative partnerships. Smart waste management, IoT, AI, and robotics solutions.",
  keywords:
    "waste management, IoT, AI, robotics, smart waste, India, Goa, technology, innovation",
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
        style={{ marginLeft: "4px" }}
        className={` ${outfit.className} antialiased bg-[#FFFFFF]`}
      >
        <Navigation />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer1 />
      </body>
    </html>
  );
}
