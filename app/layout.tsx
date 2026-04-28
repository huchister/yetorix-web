import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://yetorix.com";
const TITLE = "Yetorix — Stories in Motion";
const DESCRIPTION =
  "A creative studio for visual, sonic, and narrative content.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Coming Soon",
    url: SITE_URL,
    siteName: "Yetorix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Coming Soon",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1F2227",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="font-jakarta">{children}</body>
    </html>
  );
}
