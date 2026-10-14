import { Leaf } from "lucide-react";
import Image from "next/image";
import { heroBadges } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Icon from "./ui/Icon";


export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface-alt">
      <Container className="relative z-10 flex lg:min-h-[500px] lg:items-center">
        <div className="py-10 lg:py-12">
          <h1
            className="font-serif text-[42px] font-semibold leading-[1.1] text-[#10231a] drop-shadow-[0_1px_8px_rgba(255,255,255,0.7)] dark:text-[#f3f7ee] dark:drop-shadow-none sm:text-[54px]"
          >
            Healthy Meals
            <br />
            <span className="text-[#41561f] dark:text-[#a9cc72]">Happier Lives</span>
          </h1>
          <p
            className="mt-3.5 text-[14px] font-semibold tracking-wide text-[#10231a] dark:text-white"
          >
            Fresh. Nutritious. Convenient. Delivered to You.
          </p>
          <p
            className="mt-3 max-w-[340px] text-[13px] font-medium leading-[1.7] text-[#2b372f] dark:text-[#d3ddd0]"
          >
            At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals,
            customized plans and a commitment to your wellness goals.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="#plans" variant="dark" arrow className="px-6">
              Explore Meal Plans
            </Button>
            <Button href="#about" variant="outline" className="px-6">
              Learn More
            </Button>
          </div>
          <ul
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-[#2b372f] dark:text-[#d3ddd0]"
          >
            {heroBadges.map((badge) => (
              <li key={badge.label} className="flex items-center gap-2">
                <Icon name={badge.icon} className="size-4 text-olive" strokeWidth={1.5} />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative h-[280px] sm:h-[380px] lg:absolute lg:inset-0 lg:h-auto">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bowl-generated.jpg"
            alt="Grilled chicken, avocado and quinoa bowl on a light kitchen table"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_center] dark:hidden lg:object-center"
          />
          <Image
            src="/images/hero-bowl-generated-dark.jpg"
            alt="Grilled chicken, avocado and quinoa bowl on a dark slate surface"
            fill
            sizes="100vw"
            className="hidden object-cover object-[78%_center] dark:block lg:object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.55)_30%,rgba(255,255,255,0)_55%)] dark:lg:hidden lg:block"
        />

        <div
          className="absolute bottom-5 right-5 sm:right-8 lg:bottom-8 lg:right-[10%]"
        >
          <div className="flex items-center gap-4 rounded-2xl bg-surface px-7 py-5 shadow-[0_12px_36px_rgba(27,52,38,0.18)]">
            <Leaf aria-hidden="true" className="size-7 text-olive" strokeWidth={1.4} />
            <p className="text-[13px] leading-tight text-heading">
              Nutritious Meals
              <br />
              <span className="text-muted">A Healthier Tomorrow</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
