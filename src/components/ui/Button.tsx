import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "white";

const variants: Record<Variant, string> = {
  primary: "bg-moss text-white hover:bg-[#344b26] active:bg-[#2c4020] dark:bg-[#4a6b35] dark:hover:bg-[#587c40]",
  dark: "bg-forest text-white hover:bg-[#12261c] active:bg-[#0d1d15] dark:bg-[#2f5a3a] dark:hover:bg-[#3a6c46]",
  outline:
    "border border-[#cfd3c6] bg-surface text-ink hover:border-moss hover:bg-paper active:bg-surface-alt dark:border-white/20 dark:hover:border-white/50",
  white: "bg-white text-[#1d2b22] hover:bg-[#f3f4ec] active:bg-[#e4e8d3]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-[background-color,border-color,translate,scale] duration-300 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </a>
  );
}
