import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | 0nisec",
    default: "0nisec",
  },
  openGraph: {
    title: "0nisec",
    description:
      "Conquer Hack The Box with 0niSec! Our detailed Hack the Box writeups, tips, and strategies help you master ethical hacking and penetration testing.",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  description:
    "Conquer Hack The Box with 0niSec! Our detailed Hack the Box writeups, tips, and strategies help you master ethical hacking and penetration testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} antialiased bg-neutral-900 text-neutral-200`}
      >
        <NavBar />
        <main className="container flex px-4 md:px-0 min-h-screen flex-col md:max-w-5xl mt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
