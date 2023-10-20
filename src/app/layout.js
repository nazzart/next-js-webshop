import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import {Providers} from '@/app/providers.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-lightGray">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
