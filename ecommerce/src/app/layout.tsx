import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-c42b69ae.vercel.app"),
  title: "Lumé Atelier | Elevated Clothing for Every Moment",
  description:
    "Discover curated, sustainable fashion essentials for women, men, kids, and accessories. Elevated silhouettes crafted with conscious materials.",
  openGraph: {
    title: "Lumé Atelier | Elevated Clothing",
    description:
      "Discover curated, sustainable fashion essentials for women, men, kids, and accessories.",
    url: "https://agentic-c42b69ae.vercel.app",
    siteName: "Lumé Atelier",
    images: [
      {
        url: "https://images.unsplash.com/photo-1525171254930-643fc658b64b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lumé Atelier clothing collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumé Atelier | Elevated Clothing",
    description:
      "A modern clothing destination blending architecture and softness across collections.",
    images: [
      "https://images.unsplash.com/photo-1525171254930-643fc658b64b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${fraunces.variable} bg-sand-50 text-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
