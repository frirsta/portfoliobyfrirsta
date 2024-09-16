import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import { Wrapper } from "./wrapper";
import Loading from "@/app/loading";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Frirsta Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
