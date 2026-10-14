import type { Metadata } from "next";
import StatusPage from "@/components/StatusPage";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found | Healthify",
};

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="This page isn't on the menu"
      message="The page you're looking for may have moved or never existed. Let's get you back to something fresh and healthy."
    >
      <Button href="/" variant="dark" arrow className="px-6">
        Back to Home
      </Button>
      <Button href="/#plans" variant="outline" className="px-6">
        View Meal Plans
      </Button>
    </StatusPage>
  );
}
