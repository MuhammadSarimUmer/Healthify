import { Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="stories" className="bg-surface py-11">
      <Container wide>
        <SectionHeading
          eyebrow="Customer Stories"
          title="What Our Customers Say"
          action={{ label: "View More Reviews", href: "#stories" }}
        />
        <ul className="mt-7 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              as="li"
              delay={index * 110}
              key={item.name}
              className="flex flex-col justify-between rounded-xl border border-line bg-surface px-8 py-8 shadow-[0_2px_10px_rgba(27,52,38,0.04)] lift"
            >
              <blockquote className="text-[13px] leading-[1.8] text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={`Portrait of ${item.name}`}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="text-[12px] font-semibold text-heading">{item.name}</p>
                    <p className="text-[11px] text-muted">{item.location}</p>
                  </div>
                </div>
                <div role="img" aria-label="Rated 5 out of 5 stars" className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="size-3 fill-[#f2a81d] text-[#f2a81d]" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
