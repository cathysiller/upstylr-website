import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPSTYLR",
  description: "Door to door alterations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" sizes="16x16" href="/images/favicon.ico" />{" "}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
