import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Programming Club | CCSIT",
  description: "A portfolio of CCSIT programming club ",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-white antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
