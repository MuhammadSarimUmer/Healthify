"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";
import StatusPage from "@/components/StatusPage";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

type ErrorPageProps = {
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const retry = () => {
    setIsRetrying(true);
    reset();
  };

  return (
    <StatusPage
      code="Oops"
      title="Something went wrong"
      message="We hit an unexpected problem loading this page. Check your internet connection and try again."
    >
      <button
        type="button"
        onClick={retry}
        disabled={isRetrying}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-2.5 text-[13px] font-semibold text-white transition-[background-color,scale] duration-200 hover:bg-[#12261c] active:scale-[0.97] disabled:opacity-70 dark:bg-[#2f5a3a] dark:hover:bg-[#3a6c46]"
      >
        {isRetrying ? <Spinner className="size-3.5" /> : <RotateCcw aria-hidden="true" className="size-3.5" />}
        {isRetrying ? "Retrying" : "Try again"}
      </button>
      <Button href="/" variant="outline" className="px-6">
        Back to Home
      </Button>
    </StatusPage>
  );
}
