import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Performance Media — Engineering Growth for Small Businesses",
  description: "Performance Media helps small and growing businesses dominate their digital space through precision media buying, social presence, and strategic consulting.",
  keywords: "performance marketing, digital marketing, media buying, social media, consulting, India",
  authors: [{ name: "Performance Media" }],
  openGraph: {
    title: "Performance Media — Engineering Growth",
    description: "Precision media buying, social presence, and strategic consulting for growing businesses.",
    type: "website",
    url: "https://performancemedia.in",
    siteName: "Performance Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Media — Engineering Growth",
    description: "Precision media buying, social presence, and strategic consulting for growing businesses.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
