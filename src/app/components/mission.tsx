'use client'

import React from 'react';
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CountUp from "react-countup";


const Mission = () => {
    return (
        <>
            <div className=''>
                <div className='max-w-7xl mx-auto px-4 lg:px-8'>
                    <div className=" mx-auto px-4 py-4 lg:px-8">
                        <p className="text-5xl text-center font-bold text-ieeeyellow">IEEE Computer Society</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className='md:mx-16 mx-8 text-center '>
                            <p className='my-4'>The IEEE Computer Society (IEEE CS) is the premier source for information, inspiration, and collaboration in computer science and engineering!</p>
                            <p className='text-center my-4 text-ieeeorange hover:underline'><Link target = "no_ref" href="https://computer.org">Learn more at computer.org</Link></p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-12 px-4 lg:px-8 justify-around mx-auto border-ieeeyellow border-2 border-dashed rounded-lg text-center py-8 my-8 max-w-7xl">
                        <div className="">
                            <p className="text-ieeeyellow text-xl lg:text-2xl"><CountUp end={1000} duration={3}/>+</p>
                            <p className="g:text-2xl text-xl text-white font-bold">Members</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow text-xl lg:text-2xl"><CountUp end={100} duration={3}/>+</p>
                            <p className="g:text-2xl text-xl text-white font-bold">Events</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow text-xl lg:text-2xl"><CountUp end={3} duration={3}/></p>
                            <p className="g:text-2xl text-xl text-white font-bold">Societies</p>
                        </div>
                        <div className="">
                            <p className="text-ieeeyellow text-xl lg:text-2xl"><CountUp end={10} duration={3}/>+</p>
                            <p className="lg:text-2xl text-xl text-white font-bold">Mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;