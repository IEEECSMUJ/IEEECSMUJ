'use client'

import Slider from "~/app/components/imagegallery/image";
import React, {useEffect, useState} from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"
import useLenis from "~/app/hooks/useLenis";
import ParticlesContainer from "~/app/components/ParticlesContainer";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    useLenis();
    return (
       <div className="">
           {loading ? <div className="flex h-screen bg-black items-start">
                   <video
                       className="videolc h-screen md:h-auto justify-center md:justify-around items-center md:items-start flex -mt-36 md:-mt-40 md:scale-75 scale-100"
                       id="bg-video"
                       autoPlay={true}
                       muted={true}
                       loop={false}
                       playsInline={true}
                   >
                       <source
                           src="https://prismic-io.s3.amazonaws.com/ieeemuj/87bcd4f4-9255-43cf-be90-4a0bb6cd1e19_cs-microchip.mp4"
                           // src="https://video-previews.elements.envatousercontent.com/h264-video-previews/8bc2eb2a-6288-46a0-9873-b1ffeefc00dd/37359639.mp4"
                           type="video/mp4"
                       />
                   </video>
               </div> :
           <div>
               <ProgressBar
                   height="4px"
                   color="#FFA300"
                   options={{ showSpinner: false }}
                   shallowRouting
               />
               <div className='h-screen w-screen top-0 overflow-hidden'><ParticlesContainer /></div>
               <p className='flex absolute overflow-hidden right-0 -mt-64 lg:-mt-64 text-lg mr-6 text-ieeeyellow -rotate-90'>Scroll</p>
               <div className='flex absolute overflow-hidden right-0 -mt-48 lg:-mt-48  mr-6 motion-safe:animate-bounce bg-ieeeyellow rounded-full p-2'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                   </svg>
               </div>
               <div id='scroll' className="">
                   <div className="bg-black">
                       <Mission />
                       <div >
                           <div className="w-full py-12 bg-fixed">
                               <div className=" mx-auto px-4 lg:px-8" data-aos="fade-up">
                                   <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>
                               </div>
                           </div>
                           <Slider />
                       </div>
                       <Faq />
                   </div>
               </div>
           </div>}
       </div>
    );
}