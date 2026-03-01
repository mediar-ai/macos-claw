import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "macos-use — Give AI agents hands on macOS",
  description:
    "An MCP server that lets Claude control any macOS application through accessibility APIs. Structured data from the accessibility tree — not screenshots.",
  openGraph: {
    title: "macos-use — Give AI agents hands on macOS",
    description:
      "An MCP server that lets Claude control any macOS application through accessibility APIs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "macos-use — Give AI agents hands on macOS",
    description:
      "An MCP server that lets Claude control any macOS application through accessibility APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
