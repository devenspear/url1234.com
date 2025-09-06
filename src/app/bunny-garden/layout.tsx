import type { Metadata } from "next";
import { Bubblegum_Sans, Fredoka, Baloo_2 } from "next/font/google";

const bubblegumSans = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: ["400"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bunny's Thank-You Garden - Interactive Children's Book",
  description: "A magical interactive children's book about gratitude, featuring Bunny learning to say thank you to her garden. Ages 3-5.",
};

export default function BunnyGardenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${bubblegumSans.variable} ${fredoka.variable} ${baloo.variable} font-baloo antialiased`}>
      {children}
    </div>
  );
}