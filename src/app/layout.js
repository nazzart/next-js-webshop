import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import {Providers} from '@/app/providers.js';
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentCar24 - Rent a car"};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-lightGray">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
