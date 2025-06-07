"use client"

import Image from "next/image";
import logo from "../assets/ieee-logo-white.svg";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareInstagram, faSquareWhatsapp, faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Footer() {
    return(
        <>
            <div id="parallax" className="bottom-0 mb-0 w-full z-20 min-h-96 text-white bg-fixed">
               <div className=" mx-auto lg:px-8 lg:py-16 flex justify-around gap-8 flex-wrap px-4 md:flex-row flex-col mt-8 pt-4 md:gap-0 md:py-8">
                   <div className='flex justify-between md:flex-row flex-col'>
                       <div className="md:py-8">
                           {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                           <Image src={logo} alt="logo" className="w-64 md:w-72"/>
                       </div>
                   </div>
                   <div className='flex justify-between md:flex-row flex-col gap-8 w-[70%]'>
                       <div className="">
                           <p className="text-xl font-semibold pb-2">Socials</p>
                           <ul className=" content-evenly text-base font-medium">
                               <li>
                                   <Link href="https://www.linkedin.com/company/ieee-cs-muj/" className="inline-flex"><FontAwesomeIcon icon={faLinkedin} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeecsmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </Link>
                               </li>
                               <li>
                                   <Link href="https://instagram.com/ieee_csmuj?igshid=OGQ5ZDc2ODk2ZA==" className="inline-flex"><FontAwesomeIcon icon={faSquareInstagram} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieee_csmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </Link>
                               </li>
                               <li>
                                   <Link href="https://chat.whatsapp.com/GHqC5oT8x0w6ogNy94fhuI" className="inline-flex"><FontAwesomeIcon icon={faSquareWhatsapp} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@ieeecsmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </Link>
                               </li>
                               <li>
                                   <Link href="https://github.com/IEEECSMUJ/IEEECSMUJ" className="inline-flex"><FontAwesomeIcon icon={faSquareGithub} size="xl"/><p className="hover:underline hover:underline-offset-2 pl-1">@IEEECSMUJ</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </Link>
                               </li>
                           </ul>
                       </div>
                       <div className="">
                           <p className="text-xl font-semibold pb-2">Contact Us</p>
                           <div className="text-base flex flex-col gap-3">
                               <ul>
                                   <li><Link href="tel:+919721490618">+91 98713 40076</Link></li>
                                   <li>Samaksh Gupta</li>
                                   <li>Chairperson</li>
                               </ul>
                               <ul>
                                   <li><Link href="tel:+919569516125">+91 88605 14740</Link></li>
                                   <li>Tamanna Yadav</li>
                                   <li>Vice Chairperson</li>
                               </ul>
                           </div>
                       </div>
                       <div className="">
                           <p className="text-xl font-semibold pb-2">Links</p>
                           <ul className="text-base flex flex-col gap-1 ">
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><Link href="https://jaipur.manipal.edu/">MUJ Official Website</Link></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><Link href="https://www.ieee.org/">IEEE Official Website</Link></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><Link href="https://www.computer.org/">IEEE Computer Society</Link></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><Link href="https://ieeemuj.com/">IEEE MUJ Website</Link></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><Link href="https://www.ieee.org/membership_services/membership/join/index.html">IEEE Global Membership</Link></li>
                           </ul>
                       </div>
                       <div className="md:w-[20%] mb-4">
                           <p className="text-xl font-semibold pb-2">Address</p>
                           <p className="text-base leading-6">Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007</p>
                       </div>
                   </div>
               </div>
            </div>
        </>
    )
}
