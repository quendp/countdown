import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Time With You",
  description: "Counting to forever :>",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
