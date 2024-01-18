import "~/styles/globals.css";

import {Montserrat, Open_Sans, Poppins} from "next/font/google";
import {headers} from "next/headers";
import {TRPCReactProvider} from "~/trpc/react";
import Navbar from "~/app/components/navbar";
import Footer from "~/app/components/footer";
import React from "react";
import {Metadata} from "next";
import Head from "next/head";


const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-sans",
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export const metadata: Metadata = {
    title: "IEEE Computer Society MUJ",
    description: "IEEE Computer Society, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us.",
    icons: [{rel: "icon", url: "/favicon.ico"}],
    keywords: ["ieeecsmuj, ieee cs muj , IEEE CS MUJ, IEEE, Genesis, IEEEMUJ, MUJ, CS Club, Manipal University Jaipur, Computer Society Club MUJ, Jaipur, Manipal's Biggest , Technical club, ieee student chapter "],
    alternates: {
        canonical: "https://cs.ieeemuj.com"
    }

};
export default function RootLayout({

                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
        <Head>
            <title>IEEE CS MUJ</title>
            <link rel="canonical" href="https://cs.ieeemuj.com"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'IEEE CS MUJ',
                        url: 'https://cs.ieeemuj.com',
                        // Add more structured data properties here
                    }),
                }}
            />
        </Head>
        <body className={`font-sans bg-black ${poppins.variable}`}>
        <Navbar/>
        <div className='bg-black overflow-hidden text-white'>
            <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
