import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { mealPlans } from "@/data/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function MealPlans() {
  return (
    <section id="services" className="bg-surface-alt py-11">
      <Container wide>
        <SectionHeading
          eyebrow="Our Services"
          title="Healthy Meal Plans for Every Lifestyle"
          action={{ label: "View All Services", href: "#plans" }}
        />
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mealPlans.map((plan, index) => (
            <Reveal
              as="li"
              delay={index * 90}
              key={plan.title}
              className="lift group flex flex-col rounded-xl bg-surface shadow-[0_2px_10px_rgba(27,52,38,0.06)]"
            >
              <div className="relative h-[130px] overflow-hidden rounded-t-xl">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
                  className="transform-gpu object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative flex-1 px-5 pb-5 pt-4">
                <h3 className="font-serif text-[16px] font-semibold text-heading">{plan.title}</h3>
                <p className="mt-2 max-w-[200px] pb-8 text-[12px] leading-[1.6] text-muted">
                  {plan.description}
                </p>
                <a
                  href="#plans"
                  aria-label={`Explore ${plan.title}`}
                  className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full border border-moss/60 bg-sage text-heading transition-colors hover:bg-moss hover:text-white active:bg-forest"
                >
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
