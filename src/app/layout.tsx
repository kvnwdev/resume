// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Willoughby | Software Delivery & Technical Solutions Architect",
  description:
    "Technical innovator specializing in system integration, legacy modernization, and cloud architecture. Microsoft Azure certified with expertise in full-stack development.",
  metadataBase: new URL("https://resume.kvnw.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resume.kvnw.dev",
    siteName: "Kevin Willoughby's Resume",
    title:
      "Kevin Willoughby | Software Delivery & Technical Solutions Architect",
    description:
      "Technical innovator specializing in system integration, legacy modernization, and cloud architecture. Microsoft Azure certified with expertise in full-stack development.",
  },
  twitter: {
    card: "summary",
    title:
      "Kevin Willoughby | Software Delivery & Technical Solutions Architect",
    description:
      "Technical innovator specializing in system integration, legacy modernization, and cloud architecture.",
    creator: "@kvnwdev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
