import pujan from "../assets/Pujan.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub, faSquareInstagram} from "@fortawesome/free-brands-svg-icons";

export function ECTeamCard() {
    return(
        <>
            <div>
                <div className='mx-auto w-64 border p-2 bg-ieeeorange bg-opacity-10 border-ieeeorange rounded-xl'>
                    <div className="relative overflow-hidden transition duration-500 transform rounded-lg">
                        <Image src={pujan} alt="Pujan Modha" className="object-cover rounded-lg w-full aspect-[3/4]"/>
                        <div className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-ieeeorange bg-opacity-100 opacity-0 hover:opacity-100">
                            <div className="justify-center">
                                <ul className="flex flex-col items-start text-black text-base font-medium">
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-center text-xl font-bold">Pujan Modha</p>
                    <p className="text-center text-lg">Webmaster</p>
                </div>
            </div>
        </>
    )
}

export function CCTeamCard() {
    return(
        <>
            <div>
                <div className='mx-auto w-64 border p-2 bg-ieeeorange bg-opacity-10 border-ieeeorange rounded-full'>
                    <div className="relative overflow-hidden transition duration-500 transform rounded-full">
                        <Image src={pujan} alt="Pujan Modha" className="object-cover rounded-full w-full aspect-square"/>
                        <div className="absolute inset-0 flex flex-col justify-end p-16 text-center transition-opacity duration-300 bg-ieeeorange bg-opacity-100 opacity-0 hover:opacity-100">
                            <div className="justify-center">
                                <ul className="flex flex-col items-start text-black text-base font-medium">
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">Linkedin<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">GitHub<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="inline-flex gap-2">
                                            <FontAwesomeIcon icon={faSquareInstagram} size="xl"/>
                                            <p className="inline-flex hover:underline hover:underline-offset-2">Instagram<span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" /></svg>
                                        </span>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-center text-xl font-bold">Pujan Modha</p>
                    <p className="text-center text-lg">Webmaster</p>
                </div>
            </div>
        </>
    )
}