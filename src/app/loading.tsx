import Logo from "@/components/ui/Logo";
import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center gap-5 bg-surface text-olive"
    >
      <Logo href="/" />
      <Spinner className="size-8 border-[3px]" />
      <span className="sr-only">Loading Healthify</span>
    </div>
  );
}
