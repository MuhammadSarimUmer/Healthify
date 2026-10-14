import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  action?: { label: string; href: string };
  className?: string;
};

export default function SectionHeading({ eyebrow, title, action, className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={`flex items-end justify-between gap-4 ${className}`}>
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
        <h2 className="mt-1 font-serif text-[32px] font-semibold leading-tight text-heading sm:text-[36px]">
          {title}
        </h2>
      </div>
      {action && (
        <a
          href={action.href}
          className="hidden shrink-0 items-center gap-1.5 pb-2 text-[13px] text-muted transition-colors hover:text-heading sm:inline-flex"
        >
          {action.label}
          <ArrowRight aria-hidden="true" className="size-3" />
        </a>
      )}
    </Reveal>
  );
}
