'use client'

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar/dist/appDir";

export default function Page() {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 200,
            duration: 800,
            easing: 'ease',
            anchorPlacement: 'top-bottom',

        });
    return(
        <>
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <div className='' data-aos="fade-up">
                <div className="bg-[#000000]">
                    <div className="xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw] min-h-screen max-h-screen flex items-center justify-center">
                        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:w-full pb-8">
                            <div className="text-left">
                                <h1 className="text-5xl text-ieeeyellow font-medium">WIP</h1>
                                <p className="text-xl lg:text-3xl pb-8 white font-medium">This Page is Still being developed.</p>
                                <a rel="noopener noreferrer" href="/"
                                   className="px-8 py-3 text-lg font-medium border-2 border-ieeeyellow hover:text-ieeeyellow rounded-lg hover:bg-opacity-0 bg-ieeeyellow text-ieeegray">Go Back To Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}