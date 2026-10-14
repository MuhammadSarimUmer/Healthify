"use client";

import { RotateCcw, WifiOff } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import Spinner from "./ui/Spinner";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

const getSnapshot = () => navigator.onLine;
const getServerSnapshot = () => true;

/** Shows a friendly message while the browser has no internet connection. */
export default function OfflineNotice() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isRetrying, setIsRetrying] = useState(false);

  const retry = () => {
    setIsRetrying(true);
    window.location.reload();
  };

  if (isOnline) return null;

  return (
    <div
      role="alert"
      className="fixed inset-x-4 bottom-5 z-[60] mx-auto flex max-w-[460px] items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-[0_16px_44px_rgba(0,0,0,0.22)] sm:bottom-6"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-heading">
        <WifiOff aria-hidden="true" className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-serif text-[16px] font-semibold text-heading">You&apos;re offline</p>
        <p className="mt-0.5 text-[13px] leading-snug text-muted">
          Check your internet connection. We&apos;ll reconnect automatically.
        </p>
      </div>
      <button
        type="button"
        onClick={retry}
        disabled={isRetrying}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[12px] font-semibold text-heading transition-colors hover:bg-paper active:scale-[0.97] disabled:opacity-70"
      >
        {isRetrying ? <Spinner className="size-3.5" /> : <RotateCcw aria-hidden="true" className="size-3.5" />}
        {isRetrying ? "Retrying" : "Retry"}
      </button>
    </div>
  );
}
