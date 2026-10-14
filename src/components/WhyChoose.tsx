import { advantages } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";

export default function WhyChoose() {
  return (
    <section
      id="advantages"
      className="bg-[linear-gradient(90deg,#eef0e3_0%,#e5e9d6_100%)] py-10 dark:bg-none dark:bg-[#17261c] lg:py-9"
    >
      <Container wide className="grid items-center gap-8 lg:grid-cols-[1fr_1.55fr] lg:gap-10">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
            Our Advantages
          </p>
          <h2 className="mt-2 font-serif text-[32px] font-semibold leading-tight text-heading sm:text-[34px]">
            Why Choose Healthify
          </h2>
          <p className="mt-3 max-w-[300px] text-[13px] leading-[1.7] text-muted">
            More than just meals — we deliver a healthier, happier you with benefits that fit your
            lifestyle.
          </p>
          <Button href="#plans" variant="primary" arrow className="mt-5 px-5">
            Discover All Advantages
          </Button>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <Reveal
              as="li"
              delay={index * 90}
              key={item.title}
              className="flex flex-col items-center rounded-xl bg-paper px-3 pb-5 pt-6 text-center shadow-[0_2px_10px_rgba(27,52,38,0.05)] lift"
            >
              <Icon name={item.icon} className="size-7 text-heading" strokeWidth={1.2} />
              <h3 className="mt-4 font-serif text-[14px] font-semibold text-heading">{item.title}</h3>
              <p className="mt-1.5 max-w-[100px] text-[12px] leading-[1.5] text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
