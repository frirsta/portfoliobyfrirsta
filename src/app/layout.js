import { Suspense } from "react";
import "./globals.css";
import { Wrapper } from "./wrapper";
import Loading from "@/app/loading";

export const metadata = {
  title: "Frirsta Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&f[]=panchang@200,300,400,500,600,700,800,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
