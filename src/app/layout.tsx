import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import { AntThemeProvider } from "@/theme";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile MGT",
  description: "Profile MGT description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AntThemeProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </AntThemeProvider>
    </html>
  );
}
