import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Karl Michael Figuerrez | Portfolio",
  description: "Portfolio of Karl Michael Figuerrez buit with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} bg-zinc-900 text-zinc-200`}>
        {children}
      </body>
    </html>
  );
}
