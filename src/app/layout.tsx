import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pankaj Kumar — Full‑stack Developer",
  description:
    "Portfolio of Pankaj Kumar, a full‑stack developer specializing in Next.js, Express.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[rgb(var(--bg))] text-[rgb(var(--fg))]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
