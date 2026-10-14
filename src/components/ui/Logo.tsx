import Image from "next/image";

type LogoProps = {
  href?: string;
  /** Always render the light (cream) logo, e.g. on the dark footer. */
  alwaysLight?: boolean;
};

const logoClass = "h-[64px] w-auto max-w-none -my-3 -ml-2";

export default function Logo({ alwaysLight = false, href = "#home" }: LogoProps) {
  return (
    <a href={href} aria-label="Healthify home" className="block w-fit">
      {alwaysLight ? (
        <Image src="/images/logo-light.png" alt="Healthify" width={578} height={432} className={logoClass} />
      ) : (
        <>
          <Image
            src="/images/logo-dark.png"
            alt="Healthify"
            width={578}
            height={432}
            priority
            className={`${logoClass} dark:hidden`}
          />
          <Image
            src="/images/logo-light.png"
            alt="Healthify"
            width={578}
            height={432}
            className={`${logoClass} hidden dark:block`}
          />
        </>
      )}
    </a>
  );
}
