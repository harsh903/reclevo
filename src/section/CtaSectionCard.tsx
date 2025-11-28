"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ButtonProp = {
  label: string;
  href?: string; // if it's a link
  onClick?: () => void; // if it's a button
  icon?: LucideIcon;
  variant?: "primary" | "secondary"; // style variant
  textColor?: string;
  bgColor?: string;
};

type CtaSectionProps = {
  text1: string;
  text2: string;
  subtitle?: string;
  text1Color?: string;
  text2Color?: string;
  subtitleColor?: string;
  bgColor?: string;
  buttons?: ButtonProp[];
};

export default function CtaSectionCard({
  text1,
  text2,
  subtitle,
  text1Color = "#ffffff",
  text2Color = "#ffffff",
  subtitleColor = "#ffffff",
  bgColor = "#0C5E41",
  buttons = [],
}: CtaSectionProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: bgColor }}>
      <div className="container-custom text-center">
        {/* Headings */}
        <h2
          className=" text-2xl sm:text-3xl lg:text-5xl tracking-tight mb-4 font-medium mr-2 font-[Inter] block"
          style={{ color: text1Color }}
        >
          {text1}
        </h2>
        <h2
          className=" mb-6 block font-extrabold font-['Open_Sans'] text-5xl sm:text-6xl lg:text-7xl"
          style={{ color: text2Color }}
        >
          {text2}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-sm sm:text-md lg:text-xl leading-relaxed max-w-3xl mx-auto font-[Inter]"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
            {buttons.map((btn, i) => {
              const BtnIcon = btn.icon;
              const content = (
                <>
                  {BtnIcon && <BtnIcon className="w-5 h-5 mr-2" />}
                  {btn.label}
                </>
              );

              // If link
              if (btn.href) {
                return (
                  <Link
                    key={i}
                    href={btn.href}
                    className={`px-6 py-3 rounded-lg flex items-center justify-center font-semibold transition-all ${
                      btn.variant === "secondary"
                        ? "bg-transparent border border-white hover:bg-white hover:!text-black"
                        : "bg-white text-black hover:opacity-90"
                    }`}
                    style={{
                      color: btn.textColor,
                      backgroundColor: btn.bgColor,
                    }}
                  >
                    {content}
                  </Link>
                );
              }

              // If button
              return (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center font-semibold transition-all ${
                    btn.variant === "secondary"
                      ? "bg-transparent border border-white"
                      : "bg-white text-black hover:opacity-90"
                  }`}
                  style={{
                    color: btn.textColor,
                    backgroundColor: btn.bgColor,
                  }}
                >
                  {content}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
