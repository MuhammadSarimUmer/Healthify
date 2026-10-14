import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

// Scroll animations were removed; this is now a plain wrapper element.
export default function Reveal({ children, as: Tag = "div", className = "" }: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}
