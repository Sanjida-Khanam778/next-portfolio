import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { StarBackground } from "@/components/Background";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjida Khanam | Frontend Developer",
  description: "Portfolio of Sanjida Khanam, a passionate Frontend Developer.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} antialiased min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <StarBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
