import type { Metadata } from "next";
import { Aref_Ruqaa, Caveat, Inter, Source_Serif_4 } from "next/font/google";
import OfflineNotice from "@/components/OfflineNotice";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["500"] });

const aref = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  weight: ["700"],
});

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Healthify | Healthy Meals, Happier Lives",
  description:
    "Fresh, nutritious, convenient healthy meal plans delivered to your door in Dubai, UAE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} ${caveat.variable} ${aref.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <OfflineNotice />
      </body>
    </html>
  );
}
