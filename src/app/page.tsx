import Hero from "~/app/components/hero";
import Slider from "~/app/components/imagegallery/image";
import React from "react";
import Mission from "~/app/components/mission";
import Faq from "./components/faq"

export default function Home() {
    return (
        <>
            <div className="bg-black">
                <Hero />
                <Mission />
                <div className="">
                    <div className="w-full py-12 bg-fixed">
                        <div className=" mx-auto px-4 lg:px-8">
                            <p className="text-5xl text-center font-bold text-ieeeyellow">Events Gallery</p>
                            <hr className="mt-1 border-ieeegray opacity-20"/>
                        </div>
                    </div>
                    <Slider />
                    <Faq />
                </div>
            </div>
        </>
    );
}