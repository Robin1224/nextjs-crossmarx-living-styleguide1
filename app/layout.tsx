import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers"
import "./globals.css";
import Sidebar from "@/app/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handprint - Living Styleguide",
  description: "Living styleguide for Handprint Footprint Calculator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
