import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gian Alcantara | Full Stack Developer",
  description: "A showcase of my work and skills as a Full Stack Developer. Explore my projects, technical expertise, and professional journey.",
  keywords: ["Full Stack Developer", "Web Development", "Software Engineer", "Gian Alcantara", "Portfolio"],
  authors: [{ name: "Gian Alcantara" }],
  creator: "Gian Alcantara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gianraphael.vercel.app",
    title: "Gian Alcantara | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    siteName: "Gian Alcantara Portfolio",
    images: [{
      url: "/assets/og-image.png",
      width: 1200,
      height: 630,
      alt: "Gian Alcantara - Full Stack Developer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gian Alcantara | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: '/assets/favicon.ico',
    apple: '/assets/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased tracking-tighter`}>
        {children}
      </body>
    </html>
  );
}
  