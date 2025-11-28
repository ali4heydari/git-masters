import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type React from "react";
import { Analytics } from "@vercel/analytics/next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Git Masters - Master Git & Collaborate Like a Pro",
  description:
    "Free comprehensive Git workshop. Learn version control, collaboration, and professional development workflows.",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${roboto.className}  antialiased`}>
        <Suspense
          fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
