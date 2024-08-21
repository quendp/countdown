import { poppins, rozhaOne } from "@/utilities/fonts";
import "./globals.css";

export const metadata = {
  title: "My Time With You",
  description: "Counting to forever :>",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${poppins.variable} ${rozhaOne.variable} font-sans scroll-smooth`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
