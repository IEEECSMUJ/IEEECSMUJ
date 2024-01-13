'use client'

import Slider from "~/app/components/imagegallery/image";
import React, {useEffect, useState} from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"
import useLenis from "~/app/hooks/useLenis";
import ParticlesContainer from "~/app/components/ParticlesContainer";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import ReactPlayer from 'react-player'


export default function Home() {
    const [playing, setPlaying] = useState(true);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    // }, []);
    useLenis();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [navBarH, setNH] = useState(0)
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setNH((document.querySelector("#navbar"))?.clientHeight)
    }, []);
    const isMobile = windowSize.width <= 720 && windowSize.height <= 1280
    return (
        <div className="">
            <div>
                <ProgressBar
                    height="4px"
                    color="#FFA300"
                    options={{showSpinner: false}}
                    shallowRouting
                />
                <div className='h-screen w-screen overflow-hidden relative'>
                    <ReactPlayer
                        url='/cs-microchip.mp4'
                        style={{margin : "auto"}}
                        playing={playing} progressInterval={100} width={isMobile ? windowSize.width * 0.8 : windowSize.width}
                        height={isMobile ? windowSize.height * 0.75: windowSize.height - navBarH} onProgress={(n) => {
                        if (n.playedSeconds >= 4.8) setPlaying(false)
                    }}/>
                </div>
                <p className='flex absolute overflow-hidden right-0 -mt-64 lg:-mt-64 text-lg mr-6 text-ieeeyellow -rotate-90'>Scroll</p>
                <div
                    className='flex absolute overflow-hidden right-0 -mt-48 lg:-mt-48  mr-6 motion-safe:animate-bounce bg-ieeeyellow rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </div>
                <div id='scroll' className="">
                    <div className="bg-black">
                        <Mission/>
                        <div>
                            <div className="w-full py-12 bg-fixed">
                                <div className=" mx-auto px-4 lg:px-8" data-aos="fade-up">
                                    <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>
                                </div>
                            </div>
                            <Slider/>
                        </div>
                        <Faq/>
                    </div>
                </div>
            </div>
        </div>
    );
}