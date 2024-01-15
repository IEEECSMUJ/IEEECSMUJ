'use client'

import React from "react";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {motion} from "framer-motion";

export default function Page() {

    return(
        <>
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, ease: 'linear', type: "tween"}}>
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
            </motion.div>
        </>
    )
}