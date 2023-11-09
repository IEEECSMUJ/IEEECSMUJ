"use client"


import logo from "../assets/IEEE-logo-about.svg";
import Image from "next/image";
import Link from "next/link";

import Header from "./header"

export default function Navbar() {

    return(
        <>
            <div className="w-full bg-[#292929] max-h-20  z-20 sticky top-0">
                <Header />
                <div className=" flex flex-row items-center justify-between mx-auto px-4 lg:px-8">
                    <Link href="/" className="flex items-center ml-0 pt-2 my-2">
                        <div className="">
                            <div className="">
                                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                <Image src={logo} alt="logo" className="w-[144px] lg:w-40 lg:px-3"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}