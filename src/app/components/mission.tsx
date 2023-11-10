import React from 'react';

const Mission = () => {
    return (
        <>
            <div className='bg-[#000000]'>
                <div className=" mx-auto px-4 py-8 lg:px-8">
                    <p className="text-5xl text-center font-bold text-ieeeyellow">Who are we?</p>
                    <hr className="mt-1 border-ieeegray opacity-20"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                <div className='md:mx-16 mx-8 text-center '>
                    <p className='my-4'>We are a vibrant community of tech enthusiasts united by a common goal – to foster a dynamic coding environment through an exciting array of tech and semi-tech events.</p>
                    <p className='my-4'>Our mission is to inspire innovation, collaboration, and continuous learning!</p>
                </div>
            </div>
            <div className='bg-[#000000]'>
                <div className=" mx-auto px-4 py-8 lg:px-8">
                    <p className="text-5xl text-center font-bold text-ieeeyellow">Why us?</p>
                    <hr className="mt-1 border-ieeegray opacity-20"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                <div className='md:mx-16 mx-8 text-center '>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='my-4'>We're the world's largest technical society, offering exclusive internship opportunities and abundant tech resources online. Hosting the majority of tech events, we provide diverse skill development and networking opportunities. As a member, enjoy free access to a range of events.</p>
                    <p className='my-4'>You can indulge in coding challenges within active groups, benefit from IEEE senior's success stories, and explore research paper publications. Our family culture encourages collaboration, supported by dedicated seniors, allowing you to build valuable industry connections. Join us for a dynamic and supportive tech community.</p>
                </div>
            </div>
        </>
    );
};

export default Mission;