import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { steps } from "@/data/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function HowItWorks() {
  return (
    <section className="bg-surface-alt py-10">
      <Container wide>
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
              Our Lifestages
            </p>
            <h2 className="mt-1 font-serif text-[32px] font-semibold leading-tight text-heading sm:text-[34px]">
              Healthy Eating in 3 Simple Steps
            </h2>
          </div>
          <a
            href="#plans"
            className="hidden items-center gap-1.5 pb-2 text-[12px] text-muted transition-colors hover:text-heading sm:inline-flex"
          >
            It&apos;s Easy to Get Started
            <ArrowRight aria-hidden="true" className="size-3" />
          </a>
        </Reveal>

        <ol className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <Reveal as="li" delay={index * 140} className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage font-serif text-[16px] font-semibold text-heading">
                  {index + 1}
                </span>
                <Icon name={step.icon} className="size-7 shrink-0 text-heading" strokeWidth={1.2} />
                <div>
                  <h3 className="font-serif text-[14px] font-semibold text-heading">{step.title}</h3>
                  <p className="mt-1 max-w-[170px] text-[12px] leading-[1.5] text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
              {index < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="hidden size-4 shrink-0 text-heading lg:block"
                  strokeWidth={1.3}
                />
              )}
            </Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}
