import { stats } from "@/data/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function Stats() {
  return (
    <section aria-label="Healthify in numbers" className="bg-surface-alt">
      <Container className="grid grid-cols-2 gap-y-6 py-7 lg:grid-cols-4 lg:py-0">
        {stats.map((stat, index) => (
          <Reveal
            delay={index * 90}
            key={stat.label}
            className={`flex items-center justify-center gap-3 lg:h-[100px] ${
              index > 0 ? "lg:border-l lg:border-line" : ""
            }`}
          >
            <Icon name={stat.icon} className="size-6 shrink-0 text-heading" strokeWidth={1.3} />
            <div>
              <p className="font-serif text-[22px] font-semibold leading-none text-heading">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[12px] text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
