"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/content";
import Button from "./ui/Button";
import Container from "./ui/Container";
import ThemeToggle from "./ThemeToggle";
import Logo from "./ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface">
      <Container className="flex h-[68px] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? "page" : undefined}
              className={`text-[13px] font-medium transition-colors hover:text-olive ${
                index === 0 ? "text-olive" : "text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="#plans" variant="primary" arrow className="hidden px-5 py-2.5 sm:inline-flex">
            Get Started
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full text-heading transition-colors hover:bg-surface-alt active:bg-sage lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-surface lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-alt"
              >
                {link.label}
              </a>
            ))}
            <Button href="#plans" arrow className="mt-2 sm:hidden">
              Get Started
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
