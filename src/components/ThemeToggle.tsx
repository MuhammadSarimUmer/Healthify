"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="relative inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-heading transition-colors hover:bg-paper active:bg-sage"
    >
      <Sun aria-hidden="true" className={`absolute size-[18px] transition-all duration-300 ${isDark ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} />
      <Moon aria-hidden="true" className={`absolute size-[18px] transition-all duration-300 ${isDark ? "scale-50 opacity-0" : "scale-100 opacity-100"}`} />
    </button>
  );
}
