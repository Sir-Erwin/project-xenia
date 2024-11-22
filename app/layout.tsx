import type { Metadata } from "next";
import localFont from "next/font/local";
//import "./globals.css";
import NavBar from "./navbar";

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
  title: "Xenia",
  description: "To Serve And Not To Be Served",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="master-container" style={{margin:0}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>

        {children}

        {/*<p>By Group 41</p>*/}
      </body>
    </html>
  );
}
