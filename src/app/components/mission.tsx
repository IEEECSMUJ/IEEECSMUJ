"use client";

import React,  { useRef, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CountUp from "react-countup";
import {motion} from "framer-motion";

import image1 from "../../../public/galleryIEEE/image1.jpeg";
import image2 from "../../../public/galleryIEEE/image2.jpeg";
import image3 from "../../../public/galleryIEEE/image3.jpeg";
import image4 from "../../../public/galleryIEEE/image4.jpg";
import image5 from "../../../public/galleryIEEE/image5.jpeg";
import image7 from "../../../public/galleryIEEE/image7.jpeg";
import image8 from "../../../public/galleryIEEE/image8.JPG";
import image9 from "../../../public/galleryIEEE/image9.JPG";
import image10 from "../../../public/galleryIEEE/image10.jpeg";

const Mission = () => {

    return (
        <>
            <motion.div className="bg-[#000000]" initial={{opacity: 0, y: 75}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, ease: 'linear', type: "tween"}}>
                <div className='max-w-7xl mx-auto px-4 lg:px-8'>
                    <div className=" mx-auto px-4 py-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">IEEE Computer Society</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className='md:mx-16 mx-8 text-center '>
                            <p className='my-4'>The IEEE Computer Society (IEEE CS) is the premier source for
                                information, inspiration, and collaboration in computer science and engineering!</p>
                            <p className='text-center my-4 text-ieeeorange hover:underline'><Link target="no_ref"
                                                                                                  href="https://computer.org">Learn
                                more at computer.org</Link></p>
                        </div>
                    </div>
                    <div
                        className="flex bg-[#292929] bg-opacity-30 backdrop-blur-0 shadow flex-wrap gap-12 px-4 lg:px-8 justify-around mx-auto border-ieeeyellow  rounded-lg text-center py-8 my-8 max-w-7xl">
                        <div className="">
                            <p className="text-ieeeyellow font-bold text-xl lg:text-2xl"><CountUp end={1500}
                                                                                                  duration={10}/>+</p>
                            <p className="g:text-2xl text-xl text-white font-bold">Members</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow font-bold text-xl lg:text-2xl"><CountUp end={20}
                                                                                                  duration={15}/>+</p>
                            <p className="g:text-2xl text-xl text-white font-bold">Events</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow font-bold text-xl lg:text-2xl"><CountUp end={3}
                                                                                                  duration={15}/>+</p>
                            <p className="g:text-2xl text-xl text-white font-bold">Societies</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow font-bold text-xl lg:text-2xl"><CountUp end={10}
                                                                                                  duration={15}/>+</p>
                            <p className="lg:text-2xl text-xl text-white font-bold">Mentors</p>
                        </div>
                    </div>
                </div>
                <div className="w-full my-8 flex flex-col gap-y-10 p-20">
                    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
                        <Image
                            src={image1} 
                            alt="1"
                            className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] w-[250px] max-w-[700px] h-[250px] rounded-3xl object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                        <Image
                            src={image2} 
                            alt="1"
                            className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] w-[250px] max-w-[700px] h-[250px] rounded-3xl object-cover"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                        <Image
                            src={image3} 
                            alt="1"
                            className="2xl:h-[310px] lg:w-[320px] h-[250px] w-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] max-w-[700px]"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                    </div>

                    <div className="flex flex-row lg:gap-x-8 max-w-[700px] lg:max-w-full mx-auto justify-between lg:m-0 sm:gap-x-6">
                        <div className="flex flex-col lg:gap-y-10 gap-y-8 flex-wrap sm:flex-nowrap">
                            <Image
                                src={image4}
                                alt="1"
                                className="flex:1 2xl:flex-none 2xl:w-[420px] 2xl:h-[300px] lg:h-[550px] w-full h-[250px] sm:h-[500px] rounded-3xl object-cover lg:w-max-[700px]"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                            />
                            <Image
                                src={image5} /*this image is only working @400px responsive*/
                                alt="1"
                                className="block sm:hidden 2xl:block 2xl:w-[420px] 2xl:h-[300px] lg:h-[250px] lg:w-[280px] h-[250px] rounded-3xl object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                            />
                        </div>
                        <div className="flex flex-col lg:gap-y-10 gap-y-8">
                            <Image
                                src={image10} 
                                alt="1"
                                className="hidden sm:block lg:flex-1 2xl:flex-none 2xl:block lg:h-[550px] lg:w-[550px] 2xl:w-[420px] 2xl:h-[300px] w-[250px] h-[230px] rounded-3xl object-cover"
                                placeholder="blur"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-y-8 gap-x-8">
                        <Image
                            src={image7} 
                            alt="1"
                            className="2xl:h-[310px] lg:w-[320px] h-[250px] rounded-3xl object-cover lg:flex-1 lg:max-w-[880px] w-[250px] max-w-[700px]"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                        <Image
                            src={image8} 
                            alt="1"
                            className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px] w-[250px]"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                        <Image
                            src={image9} 
                            alt="1"
                            className="2xl:w-[340px] 2xl:h-[310px] lg:w-[280px] h-[250px] rounded-3xl object-cover max-w-[700px] w-[250px]"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,[YOUR_BLUR_DATA_URL]"
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Mission;
