import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piano Chord Fingering App",
  description: "Interactive piano chord fingering guide for all chord types and keys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}