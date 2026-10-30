import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "@/app/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waltz's Garage | Auto Repair Kendallville, IN",
  description:
    "For 25 years, Waltz's Garage has been helping drivers in Kendallville take care of the vehicles they depend on. Oil change, repair, exhaust, brakes & more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0a0908] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
