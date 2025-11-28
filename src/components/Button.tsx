import { LucideIcon } from "lucide-react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
};

export default function Button({
  text,
  onClick,
  variant = "secondary",
  icon: Icon,
}: ButtonProps) {
  // Styles for different variants
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition duration-200 shadow-md w-38";
  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-emerald-800 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`} // ✅ variant applied here
    >
      <span>{text}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}
