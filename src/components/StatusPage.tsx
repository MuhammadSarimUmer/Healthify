import type { ReactNode } from "react";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

type StatusPageProps = {
  code: string;
  title: string;
  message: string;
  children: ReactNode;
};

export default function StatusPage({ code, title, message, children }: StatusPageProps) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-surface-alt">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-olive/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-olive/10 blur-3xl"
      />

      <header className="relative">
        <Container className="flex h-[68px] items-center">
          <Logo href="/" />
        </Container>
      </header>

      <Container className="relative flex flex-1 items-center justify-center py-12">
        <div className="max-w-[520px] text-center">
          <p
            aria-hidden="true"
            className="font-serif text-[110px] font-semibold leading-none text-olive/90 sm:text-[150px]"
          >
            {code}
          </p>
          <h1 className="mt-2 font-serif text-[30px] font-semibold leading-tight text-heading sm:text-[38px]">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[1.7] text-muted">{message}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">{children}</div>
        </div>
      </Container>
    </main>
  );
}
