'use client'

import React from 'react';
import Link from "next/link";


const Mission = () => {
    return (
        <>
            <div className='flex absolute overflow-hidden right-0 -mt-32  mr-6 bg-ieeeyellow rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className=''>
                <div className=''>
                    <div className=" mx-auto px-4 py-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">IEEE Computer Society</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className='md:mx-16 mx-8 text-center '>
                            <p className='my-4'>The IEEE Computer Society (IEEE CS) is the premier source for information, inspiration, and collaboration in computer science and engineering!</p>
                            <p className='text-center my-4 text-ieeeorange hover:underline'><Link target = "no_ref" href="https://computer.org">Learn more at computer.org</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#000000]'>
                <div className=" mx-auto px-4 py-4 lg:px-8">
                    <p className="text-5xl text-center font-bold text-ieeeyellow">Why us?</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
                <div className='md:mx-16 mx-8 text-center '>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='my-4'>We're the world's largest technical society, offering exclusive internship opportunities and abundant tech resources online. Hosting the majority of tech events, we provide diverse skill development and networking opportunities. As a member, enjoy free access to a range of events.</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='my-4'>You can indulge in coding challenges within active groups, benefit from IEEE senior's success stories, and explore research paper publications. Our family culture encourages collaboration, supported by dedicated seniors, allowing you to build valuable industry connections. Join us for a dynamic and supportive tech community.</p>
                </div>
            </div>
        </>
    );
};

export default Mission;