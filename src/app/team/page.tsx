'use client'

import {ECTeamCard} from "~/app/components/team_card";
import {CCTeamCard} from "~/app/components/team_card";
import { WebTeamCard } from "~/app/components/team_card";
import useLenis from "~/app/hooks/useLenis";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import React, {useEffect} from "react";
import {motion} from "framer-motion";

export default function Page() {
    useLenis();


    return (
        <>
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{showSpinner: false}}
                shallowRouting
            />
            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 150}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: 'linear', type: "tween"}}>
                <div className="w-full py-12 bg-fixed">
                    <div className=" mx-auto px-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">Team</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div>
                        <div className="mt-8 mb-16">
                            <p className="text-3xl text-center font-semibold text-ieeeyellow">Executive Committee</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                            <ECTeamCard/>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 150}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: 'linear', type: "tween"}}>
                <div className="w-full py-12 bg-fixed">
                    {/* <div className=" mx-auto px-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">Team</p>
                    </div> */}
                </div>
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div>
                        <div className="mt-8 mb-16">
                            <p className="text-3xl text-center font-semibold text-ieeeyellow">Website Team</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                            <WebTeamCard/>
                        </div>
                    </div>
                </div>
            </motion.div>


            <motion.div className="bg-[#000000] w-full py-12 bg-fixed max-w-7xl mx-auto"
                        transition={{duration: 0.5, ease: 'linear', type: "tween"}}>
                <div className="mt-8 mb-16">
                    <p className="text-3xl text-center font-semibold text-ieeeyellow">Core Committee</p>
                    <hr className="mt-1 border-ieeegray opacity-20"/>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                    <CCTeamCard/>
                </div>
            </motion.div>
        </>
    )
}