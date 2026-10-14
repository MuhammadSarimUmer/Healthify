import { WhatsAppIcon } from "./SocialIcons";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971582520144"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Healthify on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
