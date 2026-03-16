"use client"

import Image from "next/image";
import logo from "../assets/ieee-logo-white.svg";
import React from "react";


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
                                   <a href="https://www.linkedin.com/company/ieee-cs-muj/" className="inline-flex" target="_blank" rel="noopener noreferrer"><p className="hover:underline hover:underline-offset-2 pl-1">LinkedIn / @ieeecsmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </a>
                               </li>
                               <li>
                                   <a href="https://instagram.com/ieee_csmuj?igshid=OGQ5ZDc2ODk2ZA==" className="inline-flex" target="_blank" rel="noopener noreferrer"><p className="hover:underline hover:underline-offset-2 pl-1">Instagram / @ieee_csmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </a>
                               </li>
                               <li>
                                   <a href="https://chat.whatsapp.com/GHqC5oT8x0w6ogNy94fhuI" className="inline-flex" target="_blank" rel="noopener noreferrer"><p className="hover:underline hover:underline-offset-2 pl-1">WhatsApp / @ieeecsmuj</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </a>
                               </li>
                               <li>
                                   <a href="https://github.com/IEEECSMUJ/IEEECSMUJ" className="inline-flex" target="_blank" rel="noopener noreferrer"><p className="hover:underline hover:underline-offset-2 pl-1">GitHub / @IEEECSMUJ</p>
                                       <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                           <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                       </svg>
                                   </span>
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div className="">
                           <p className="text-xl font-semibold pb-2">Contact Us</p>
                           <div className="text-base flex flex-col gap-3">
                               <ul>
                                   <li><a href="tel:+919721490618">+91 98713 40076</a></li>
                                   <li>Samaksh Gupta</li>
                                   <li>Chairperson</li>
                               </ul>
                               <ul>
                                   <li><a href="tel:+919569516125">+91 88605 14740</a></li>
                                   <li>Tamanna Yadav</li>
                                   <li>Vice Chairperson</li>
                               </ul>
                           </div>
                       </div>
                       <div className="">
                           <p className="text-xl font-semibold pb-2">Links</p>
                           <ul className="text-base flex flex-col gap-1 ">
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer">MUJ Official Website</a></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE Official Website</a></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><a href="https://www.computer.org/" target="_blank" rel="noopener noreferrer">IEEE Computer Society</a></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><a href="https://ieeemuj.com/" target="_blank" rel="noopener noreferrer">IEEE MUJ Website</a></li>
                               <li className="leading-6 hover:underline hover:underline-offset-2 pl-1"><a href="https://www.ieee.org/membership_services/membership/join/index.html" target="_blank" rel="noopener noreferrer">IEEE Global Membership</a></li>
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
