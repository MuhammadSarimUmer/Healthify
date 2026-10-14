import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, footerQuickLinks, footerServices } from "@/data/content";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { FacebookIcon, WhatsAppIcon, XIcon, YouTubeIcon } from "./SocialIcons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "X", Icon: XIcon },
  { label: "WhatsApp", Icon: WhatsAppIcon },
  { label: "YouTube", Icon: YouTubeIcon },
];

const linkClass = "text-[12px] text-white/75 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Container wide className="grid gap-10 pb-10 pt-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1.15fr_0.9fr] lg:gap-8">
        <div>
          <Logo alwaysLight />
          <p className="mt-3 max-w-[190px] text-[11px] leading-[1.6] text-white/70">
            At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
          </p>
          <ul className="mt-4 flex gap-2.5">
            {socials.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#home"
                  aria-label={label}
                  className="flex size-6 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-forest"
                >
                  <Icon className="size-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-[13px] font-semibold">Quick Links</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {footerQuickLinks.map((label) => (
              <li key={label}>
                <a href="#home" className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h3 className="text-[13px] font-semibold">Our Services</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {footerServices.map((label) => (
              <li key={label}>
                <a href="#services" className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[13px] font-semibold">Get In Touch</h3>
          <ul className="mt-3 flex flex-col gap-3 text-[12px] text-white/80">
            <li className="flex items-center gap-2.5">
              <MapPin aria-hidden="true" className="size-3.5 text-white/70" />
              {contactInfo.location}
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone aria-hidden="true" className="size-3.5 text-white/70" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="size-3.5 text-white/70" />
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/20">
        <Container
          wide
          className="flex flex-col gap-2 py-4 text-[11px] text-white/70 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Copyright © 2025 Healthify. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
