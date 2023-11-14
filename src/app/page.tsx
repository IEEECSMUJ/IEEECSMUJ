'use client'

import Slider from "~/app/components/imagegallery/image";
import React from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"
import useLenis from "~/app/hooks/useLenis";
import ParticlesContainer from "~/app/components/ParticlesContainer";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
    useLenis();
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
    return (
        <>
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{ showSpinner: false }}
                shallowRouting
            />
            <div className='h-screen w-screen overflow-hidden'><ParticlesContainer /></div>
            <p className='flex absolute overflow-hidden right-0 -mt-48 lg:-mt-64 text-lg mr-6 text-ieeeyellow -rotate-90'>Scroll</p>
            <div className='flex absolute overflow-hidden right-0 -mt-32 lg:-mt-48  mr-6 motion-safe:animate-bounce bg-ieeeyellow rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div id='scroll' className="">
                <div className="bg-black">
                    <div data-aos="fade-up">
                        <Mission />
                    </div>
                    <div data-aos="fade-up">
                        <div className="w-full py-12 bg-fixed">
                            <div className=" mx-auto px-4 lg:px-8">
                                <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>
                            </div>
                        </div>
                        <Slider />
                    </div>
                    <div data-aos="fade-up">
                        <Faq />
                    </div>
                </div>
            </div>
        </>
    );
}