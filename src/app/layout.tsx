import Navbar from "./components/navbar/navbar";
import "./globals.css";
import {Providers} from '@/app/providers.js';
import Footer from "./components/footer/footer";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentCar24 - Rent a car"};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
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

export default RootLayout;