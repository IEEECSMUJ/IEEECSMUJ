import "~/styles/globals.css";

import {Montserrat, Open_Sans, Poppins} from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/components/navbar";
import Footer from "~/app/components/footer";
import React from "react";


const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
  title: "IEEE CS MUJ",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`font-sans ${poppins.variable}`}>
      <Navbar/>
      <div className=' bg-black text-white'>
          <div className="">
              <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
          </div>
          <Footer/>
      </div>
      </body>
    </html>
  );
}
