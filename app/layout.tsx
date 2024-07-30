import type { Metadata } from "next";
import "./globals.css";
import { body3 } from "@/utils/font";

export const metadata: Metadata = {
  title: "Viva Dawoodson - Premier Gents Tailor in Chennai",
  description: "Viva Dawoodson, established in 2000, offers expertly crafted men’s clothing in Chennai. Specializing in clean cutting and stitching with a commitment to customer satisfaction.",
  keywords: "men's tailor, gents clothing, custom suits, Chennai tailor, quality tailoring, clean cutting, stitching services",
  authors: [
    {
      name: 'Shafi Mohamed S',
    },
    {
      name: 'Mohamed Shuaib S',
    },
    {
      name: 'Mohamed Siraj S',
    },
    {
      name: 'Mohamed Hashim S',
      url: 'https://hashim541.vercel.app'
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body3.className} bg-background text-text`}>{children}</body>
    </html>
  );
}
