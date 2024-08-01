import type { Metadata } from "next";
import "./globals.css";
import { body3 } from "@/utils/font";
import Head from "next/head";

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
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C1XDD6X7B3"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C1XDD6X7B3');
          `}
        </script>
      </Head>
      <body className={`${body3.className} bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
