import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peddagolla Akhila | Electronics & Quality Control Professional",
  description:
    "Professional resume website for Peddagolla Akhila, an Electronics and Quality Control professional with experience in quality inspection, testing, production, and defence manufacturing environments.",
  keywords: [
    "Peddagolla Akhila",
    "Electronics Engineer",
    "Quality Control",
    "Quality Inspector",
    "Production Testing",
    "Defence Manufacturing",
    "Resume Website"
  ],
  openGraph: {
    title: "Peddagolla Akhila | Electronics & Quality Control Professional",
    description:
      "Electronics and Communication Engineering graduate with quality inspection, production testing, and defence sector apprenticeship experience.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
