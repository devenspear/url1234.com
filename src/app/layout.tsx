import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kaleidoscope | Fast, Personal, Permanent Transformation",
    template: "%s | Kaleidoscope"
  },
  description: "It's not about not drinking, it's about not wanting to. Fast, personal, and permanent transformation for alcoholics and their families.",
  keywords: ["alcoholism recovery", "plant medicine", "trauma healing", "psychedelic therapy", "holistic addiction treatment", "alcoholism treatment"],
  authors: [{ name: "Kaleidoscope" }],
  creator: "Kaleidoscope",
  metadataBase: new URL("https://kaleidoscope.life"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaleidoscope.life",
    siteName: "Kaleidoscope",
    title: "Kaleidoscope | Fast, Personal, Permanent Transformation",
    description: "It's not about not drinking, it's about not wanting to. Fast, personal, and permanent transformation for alcoholics and their families.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaleidoscope | Fast, Personal, Permanent Transformation",
    description: "It's not about not drinking, it's about not wanting to. Fast, personal, and permanent transformation for alcoholics and their families.",
    creator: "@kaleidoscope",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}