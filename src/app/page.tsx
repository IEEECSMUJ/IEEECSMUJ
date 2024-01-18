'use client'
import React, {useEffect, useState} from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"
import useLenis from "~/app/hooks/useLenis";
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import Head from "next/head";
import { NextSeo } from 'next-seo';


export default function Home() {
    const [playing, setPlaying] = useState(true)

    useLenis();
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});
    const [navBarH, setNH] = useState(0);
    useEffect(() => {
        setNH(document.querySelector("#navbar")!.clientHeight);
        setWindowSize({height: window.innerHeight, width: window.innerWidth});

    }, []);
    const isMobile = windowSize.width <= 720 && windowSize.height <= 1280
    useEffect(() => {
        const navbar: HTMLElement = document.querySelector("#navbar")!;
        if (navbar) {
            if (playing) {
                navbar.style.opacity = "0";
            } else {
                navbar.style.opacity = "1";
            }
        }
        const scroll: HTMLElement = document.querySelector("#scrollmark")!;
        if (scroll) {
            if (playing) {
                scroll.style.opacity = "0";
            } else {
                scroll.style.opacity = "1";
            }
        }
    }, [playing]);
    return (
        <div>
            <NextSeo
                title="Home | IEEE CS MUJ"
                description="This is the official website of IEEE Computer Society Manipal University Jaipur.
            Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE Computer Society.
            This society was created keeping in mind IEEE’s continued commitment to providing options at best.
            he IEEE Computer Society is driven by the central goals of equity, diversity, inclusion,
            and yearn to serve computing at its perfection."

                openGraph={{
                    url: 'https://cs.ieeemuj.com',
                    title: 'title',
                    description: 'Open Graph Description'
                }}
                twitter={{
                    handle: '@ieeecsmuj',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <ProgressBar
                height="4px"
                color="#FFA300"
                options={{showSpinner: false}}
                shallowRouting
            />
            <Head>
                <meta name="description"
                      content="Serving computing at its best with inclusion and diversity” is the prime motto of the IEEE CS MUJ.
            This society was created keeping in mind IEEE’s continued commitment to providing options at best.
            The IEEE Computer Society Manipal University Jaipur is driven by the central goals of equity, diversity, inclusion, and yearn to serve computing at its perfection.
            This is the home page for ieee cs muj's website."/>
            </Head>
            <div className='h-screen w-screen overflow-hidden relative'>
                <video src="/cs-microchip.mp4" className="mx-auto relative" autoPlay muted height={
                    isMobile ? windowSize.height * 0.75 : windowSize.height - navBarH
                } width={isMobile ? windowSize.width * 0.8 : windowSize.width} playsInline
                       style={{height: isMobile ? windowSize.height * 0.75 : windowSize.height - navBarH, width: isMobile ? windowSize.width * 0.8 : windowSize.width}}
                       onEnded={() => setPlaying(false)}/>
            </div>
            <div className='transition duration-500' id='scrollmark'>
                <p className='flex absolute overflow-hidden right-0 -mt-64 lg:-mt-64 text-lg mr-6 text-ieeeyellow -rotate-90'>Scroll</p>
                <div
                    className='flex absolute overflow-hidden right-0 -mt-48 lg:-mt-48 mr-6 motion-safe:animate-bounce bg-ieeeyellow rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"/>
                    </svg>
                </div>
            </div>
            <div className="">
                <div className="bg-black">
                    <Mission/>
                    {/*<div>*/}
                    {/*    <div className="w-full py-12 bg-fixed">*/}
                    {/*        <div className=" mx-auto px-4 lg:px-8" data-aos="fade-up">*/}
                    {/*            <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Faq/>
                </div>
            </div>
        </div>
    );
}