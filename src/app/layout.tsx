import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header/header.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HolyFork Menu",
  description: "HolyFork menu restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen overflow-hidden ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
