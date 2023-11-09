"use client"

import { useState } from "react";
import logo from "../assets/ieee-logo-about.svg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Montserrat} from "next/font/google";

export default function Navbar() {

    return(
        <>
            {/*<div className="w-full  max-h-20  z-20 sticky top-0">*/}
            {/*    <div className=" flex flex-row items-center justify-between mx-auto px-4 lg:px-8">*/}
            {/*        <Link href="/" className="flex items-center ml-0 pt-2 my-2">*/}
            {/*            <div className="">*/}
            {/*                <div className="">*/}
            {/*                    /!* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment *!/*/}
            {/*                    <Image src={logo} alt="logo" className="w-[144px] lg:w-36 lg:px-3"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Link>*/}
            {/*        <div className="hidden mx-auto lg:grid grid-cols-6 text-white text-sm font-medium ">*/}
            {/*            <Link href="/" className={`${pathname == "/" ? "bg-white text-ieeeorange underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>HOME</Link>*/}
            {/*            /!*<Link href="/events" className={`${pathname == "/events" ? "bg-white text-ieeeorange underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>EVENTS</Link>*!/*/}
            {/*            <Link href="https://medium.com/@ieeecs" className={`${pathname == "/blogs" ? "bg-white text-ieeeorange underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>BLOGS</Link>*/}
            {/*            <Link href="/about" className={`${pathname == "/about" ? "bg-white text-ieeeorange underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>ABOUT</Link>*/}
            {/*            <Link href="/team" className={`${pathname == "/team" ? "bg-white text-ieeeorange underline underline-offset-4 decoration-2 decoration-white transition duration-500" : "hover:underline underline-offset-4 decoration-2"} text-center px-4 py-2 rounded-full`}>TEAM</Link>*/}
            {/*        </div>*/}
            {/*        <div className="hidden lg:inline ">*/}
            {/*            <Link href="/" className="border-2 border-white mr-0 text-sm text-white text-auto font-medium hover:bg-white hover:text-ieeeorange text-center w-36 px-4 py-2 rounded-full">JOIN NOW</Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    )
}