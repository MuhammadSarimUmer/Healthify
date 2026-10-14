import Image from "next/image";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-deep">
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40 blur-[3px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(40,62,30,0.85),rgba(60,80,40,0.55)_55%,rgba(30,55,30,0.75))]"
      />
      <Container wide className="relative flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center lg:py-[34px]">
        <Reveal className="text-white">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
            Ready to Start?
          </p>
          <h2 className="mt-1.5 font-serif text-[28px] font-semibold leading-tight sm:text-[32px]">
            Transform Your Health, One Meal At A Time
          </h2>
          <p className="mt-1.5 text-[12px] text-white/80">
            Fresh. Nutritious. Convenient. Join thousands of happy customers today.
          </p>
        </Reveal>
        <Button href="#plans" variant="white" arrow className="px-6 py-3">
          Get Started Today
        </Button>
      </Container>
    </section>
  );
}
