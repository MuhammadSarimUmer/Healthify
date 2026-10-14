import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  wide?: boolean;
  className?: string;
};

export default function Container({ children, wide = false, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${wide ? "max-w-[1270px]" : "max-w-[1210px]"} ${className}`}
    >
      {children}
    </div>
  );
}
