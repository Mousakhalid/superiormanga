import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Stable/Footer";
import Bottom from "@/components/Stable/Bottom";
import Header from "@/components/Stable/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Superior College Manga Campus",
  description: "Be superior, be progressive",
  keywords: "Superior College Manga Campus, Superior College, Superior Lahore, Superior University, Superior Main Campus",
  openGraph: {
    title: "Superior College Manga Campus",
    description: "Be superior, be progressive",
    images: ["/logo.png"],
    url: "http://superiormanga.com"
  },
  twitter: {
    title: "Superior College Manga Campus",
    description: "Be superior, be progressive",
    images: ["/logo.png"],
    card: "summary_large_image",
    creator:"DevsCushion"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
