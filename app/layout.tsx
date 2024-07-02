import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className="grid min-h-screen w-full grid-cols-[260px_1fr] overflow-hidden">
            <SideBar></SideBar>
            {children}
          </div>
        </body>
    </html>
  );
}