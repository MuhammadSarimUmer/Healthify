import { Leaf } from "lucide-react";
import Image from "next/image";
import { aboutPoints } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-12 lg:py-[54px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <Reveal className="relative pb-10 pl-0 lg:pb-8">
          <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[330px] lg:h-[290px]">
            <Image
              src="/images/about-bowl.jpg"
              alt="Fresh vegetable bowl with avocado, spinach and radish"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-[-6px] h-[110px] w-[160px] overflow-hidden rounded-xl border-[3px] border-heading/80 bg-surface shadow-lg sm:left-[-18px] sm:h-[130px] sm:w-[200px] lg:-left-6 lg:h-[136px] lg:w-[210px]">
            <Image
              src="/images/about-chefs-generated.jpg"
              alt="Chef's hands tossing a fresh grilled vegetable salad"
              fill
              sizes="210px"
              className="object-cover object-[50%_72%]"
            />
          </div>

          <div className="absolute bottom-3 left-[120px] z-10 flex items-center gap-3.5 rounded-2xl bg-surface px-6 py-5 shadow-[0_14px_40px_rgba(27,52,38,0.28)] sm:left-[160px] lg:bottom-2 lg:left-[165px]">
            <Leaf aria-hidden="true" className="size-8 text-olive" strokeWidth={1.3} />
            <p className="text-[12px] leading-tight text-heading">
              Nourishing
              <br />
              Lives Daily
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
            About Healthify
          </p>
          <h2 className="mt-2 font-serif text-[32px] font-semibold leading-tight text-heading sm:text-[36px]">
            Your Trusted Healthy
            <br />
            Food Partner
          </h2>
          <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-muted">
            At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable.
            Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help
            individuals and families achieve their health goals without sacrificing taste.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-heading">
            {aboutPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-sage">
                  <Icon name={point.icon} className="size-3.5 text-olive" strokeWidth={1.6} />
                </span>
                {point.label}
              </li>
            ))}
          </ul>
          <Button href="#services" variant="primary" arrow className="mt-6 px-5">
            More About Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
