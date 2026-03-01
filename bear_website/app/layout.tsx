import type { Metadata } from "next";
import { Mukta_Mahee } from "next/font/google";
import "./globals.css";

const muktaMahee = Mukta_Mahee({
  variable: "--font-mukta-mahee",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "BEAR — Premium Protection",
  description:
    "A stylish condom subscription for the modern, responsible man. Premium quality, anatomical fit, discreet delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${muktaMahee.variable} antialiased`}>{children}</body>
    </html>
  );
}
