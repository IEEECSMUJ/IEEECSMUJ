'use client'

import Slider from "~/app/components/imagegallery/image";
import React from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"
import useLenis from "~/app/hooks/useLenis";
import ParticlesContainer from "~/app/components/ParticlesContainer";


export default function Home() {
    useLenis();
    return (
        <>
            <div className='h-screen w-screen -mt-16 overflow-hidden'><ParticlesContainer /></div>
            <div className="">
                <div className="bg-black">
                    <Mission />
                    <div className="w-full py-12 bg-fixed">
                        <div className=" mx-auto px-4 lg:px-8">
                            <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>
                        </div>
                    </div>
                    <Slider />
                    <Faq />
                </div>
            </div>
        </>
    );
}