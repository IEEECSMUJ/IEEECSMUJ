import React from 'react';

const Faq = () => {
    const faq = [
        {
            question: 'Google',
            answer: 'https://www.google.com'
        },
        {
            question: 'Facebook',
            answer: 'https://www.facebook.com'
        },
        {
            question: 'Twitter',
            answer: 'https://www.twitter.com'
        }
    ]

    return (
        <div>
            {faq.map((faq, index) => (
                <div key={index}>
                    <div className='font-mono'>
                        <div className=" items-center justify-around bg-ieeeorange bg-opacity-10 backdrop-blur-0 border border-ieeeorange rounded-lg shadow mb-4 md:p-3">
                            <div className="">
                                <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-ieeeorange mb-[2vh]">{faq.question}</h1>
                                <p className=" font-normal text-ieeegray lg:text-2xl text-justify">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;