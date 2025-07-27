import type { Metadata } from "next";
import Script from "next/script";
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
        {/* WebAudioFont Scripts - Load in correct order */}
        <Script
          src="https://surikov.github.io/webaudiofont/npm/dist/WebAudioFontPlayer.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://surikov.github.io/webaudiofontdata/sound/0001_FluidR3_GM_sf2_file.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}