"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["latin"] });

export default function GlobalError() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Refresh
          </Button>
        </div>
      </body>
    </html>
  );
}
