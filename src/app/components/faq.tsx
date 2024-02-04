
import React, {useState} from "react";
import AccordionData from "../data/AccordianData";
import {motion} from "framer-motion";

const FAQ = () => {
    return (
        <motion.section className="relative z-10 px-4 overflow-hidden" initial={{opacity: 0, y: 75}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, ease: 'linear', type: "tween"}}>
            <div className='justify-center'>
                <h1 className='lg:text-5xl text-4xl text-center text-ieeeyellow font-semibold pb-[2.5vh]'>FAQs</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    {AccordionData.map((accordion, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <AccordionItem
                            key={index}
                            header={accordion.accordionQuestion}
                            text={accordion.accordionAnswer}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default FAQ;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AccordionItem = ({header, text}) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        event.preventDefault();// eslint-disable-line no-restricted-globals
        setActive(!active);
    };
    return (
        <div>
            {/*<div className='bg-[#000000]'>*/}
            {/*    <div className=" mx-auto px-4 py-4 lg:px-8">*/}
            {/*        <p className="text-2xl text-center font-bold text-ieeeyellow">How can I join IEEE CS??</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="max-w-7xl mx-auto px-4 lg:px-8">*/}
            {/*    <div className='md:mx-16 mx-8 text-center '>*/}
            {/*        <p className='my-4'>Membership in IEEE CS is open to everyone. We conduct a yearly membership drive, providing an opportunity for all interested individuals to join our community.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='bg-[#000000]'>*/}
            {/*    <div className=" mx-auto px-4 py-4 lg:px-8">*/}
            {/*        <p className="text-2xl text-center font-bold text-ieeeyellow">Are there any prerequisites for joining the club?</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="max-w-7xl mx-auto px-4 lg:px-8 ">*/}
            {/*    <div className='md:mx-16 mx-8 text-center '>*/}
            {/*        <p className='my-4'>Absolutely! All you need is a genuine passion for technology and a determination to learn and grow together. We thrive on encouraging individuals and fostering a community of like-minded enthusiasts.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='bg-[#000000]'>*/}
            {/*    <div className=" mx-auto px-4  lg:px-8">*/}
            {/*        <p className="text-2xl text-center font-bold py-4  text-ieeeyellow">Who are we?</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="max-w-7xl mx-auto px-4 lg:px-8 ">*/}
            {/*    <div className='md:mx-16 mx-8 text-center '>*/}
            {/*        <p className='my-4'>We are a vibrant community of tech enthusiasts united by a common goal – to foster a dynamic coding environment through an exciting array of tech and semi-tech events.</p>*/}
            {/*        <p className='my-4'>Our mission is to inspire innovation, collaboration, and continuous learning!</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div
                className="single-faq  max-w-7xl mx-auto mt-4 rounded-lg w-full bg-[#292929] bg-opacity-30 backdrop-blur-0 shadow p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                    className={`faq-btn flex w-full text-left`}
                    onClick={() => handleToggle()}
                    style={{
                        userSelect: 'none', // Disable text selection
                        WebkitTapHighlightColor: 'transparent', // Disable tap highlighting on iOS
                    }}
                >
                    <div className="w-full">
                        <h4 className="lg:text-lg text-base font-semibold text-ieeeyellow">{header}</h4>
                    </div>
                    <div
                        className=" mr-0 flex h-7 w-full max-w-[40px] items-center justify-center rounded-lg bg-ieeeyellow bg-opacity-100 text-ieeeyellow">
                        <svg
                            className={`duration-250 fill-[#292929] ease-in-out fill-primary stroke-primary ${
                                active ? "rotate-180" : ""
                            }`}
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            />
                        </svg>
                    </div>
                </button>
                <div
                    className={`duration-200 ease-in-out ${
                        active ? "block" : "hidden"
                    }`}
                >
                    <p className="py-3 leading-relaxed text-white">{text}</p>
                </div>
            </div>
        </div>
    );
};

