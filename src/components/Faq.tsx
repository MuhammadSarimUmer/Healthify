"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface-alt py-12 lg:py-14">
      <Container wide className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 font-serif text-[32px] font-semibold leading-[1.15] text-heading sm:text-[34px]">
            Have Questions?
            <br />
            We&apos;ve Got Answers.
          </h2>
          <p className="mt-3 max-w-[320px] text-[13px] leading-[1.7] text-muted">
            Find quick answers to common questions about our meal plans, delivery, and more.
          </p>
          <Button href="#faq" variant="primary" arrow className="mt-5 px-5">
            View All FAQs
          </Button>
        </Reveal>

        <ul className="flex flex-col gap-2 lg:min-h-[380px] lg:max-w-[520px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal as="li" delay={index * 70} key={faq.question} className="rounded-lg bg-surface shadow-[0_1px_4px_rgba(27,52,38,0.05)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-lg px-5 py-3.5 text-left text-[14px] text-ink transition-colors hover:bg-paper"
                  >
                    {faq.question}
                    <Plus
                      aria-hidden="true"
                      className={`size-3.5 shrink-0 text-muted ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[13px] leading-[1.7] text-muted">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
