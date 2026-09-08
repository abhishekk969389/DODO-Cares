import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import SmoothScroll from "./smoothscroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dodo Cares - Care, Love, Companionship",
  description: "From daily walks to expert grooming and personalized care, we're here to keep your furry family happy and healthy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} ${outfit.className} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${outfit.className}`}>
         <SmoothScroll>
          <Navbar />
        {children}
        <Footer />
        </SmoothScroll>
        
      </body>
    </html>
  );
}
