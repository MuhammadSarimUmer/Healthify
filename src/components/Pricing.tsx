import { Check, Leaf, Star } from "lucide-react";
import Image from "next/image";
import { pricingPlans } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

export default function Pricing() {
  return (
    <section id="plans" className="bg-surface py-12">
      <Container wide>
        <SectionHeading
          eyebrow="Growth Plans"
          title="Find the Perfect Plan for You"
          action={{ label: "View All Plans", href: "#plans" }}
        />

        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.95fr]">
          {pricingPlans.map((plan, index) => (
            <Reveal
              as="article"
              delay={index * 100}
              key={plan.name}
              className={`lift relative flex flex-col rounded-xl bg-paper shadow-[0_2px_12px_rgba(27,52,38,0.07)] ${
                plan.popular ? "border border-moss/30 lg:-mt-2 lg:mb-0" : "border border-line"
              }`}
            >
              {plan.popular && (
                <p className="flex items-center justify-center gap-1.5 rounded-t-[11px] bg-olive py-1.5 text-[11px] dark:text-[#10231a] font-semibold uppercase tracking-[0.14em] text-white">
                  Most Popular
                  <Star aria-hidden="true" className="size-2.5 fill-white" />
                </p>
              )}
              <div className="flex flex-1 flex-col px-7 pb-7 pt-7">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                      plan.popular ? "bg-sage" : ""
                    }`}
                  >
                    <Icon name={plan.icon} className="size-5 text-olive" strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-heading">{plan.name}</h3>
                    <p className="mt-1.5 max-w-[190px] text-[12px] leading-[1.55] text-muted">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[20px] font-bold text-heading">
                  {plan.price} <span className="text-[12px] font-normal text-muted">/ month</span>
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[12px] text-ink">
                      <Check aria-hidden="true" className="size-3 shrink-0 text-olive" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.popular ? "dark" : "outline"}
                  className="mt-7 w-full py-3 text-[13px]"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}

          <Reveal as="article" delay={300} className="relative min-h-[320px] overflow-hidden rounded-xl md:col-span-2 lg:col-span-1">
            <Image
              src="/images/invest.jpg"
              alt="Fresh spinach salad with pomegranate and avocado"
              fill
              sizes="(min-width: 1024px) 280px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <Leaf aria-hidden="true" className="mb-2 size-5 opacity-80" strokeWidth={1.3} />
              <p className="font-serif text-[26px] font-semibold leading-[1.15]">
                Invest in
                <br />a Healthier
                <br />
                <span className="inline-block border-b border-white/80 pb-0.5">You</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
