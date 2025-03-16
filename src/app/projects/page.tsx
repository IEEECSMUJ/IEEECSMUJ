"use client";

import React, { useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import projectsData from "~/app/data/projectdata";
import Image from "next/image";


export default function Page() {
//   const [activeTab, setActiveTab] = useState<string>("COMPLETED");

//   projectsData.sort((a, b) => a.id - b.id);
//   const displayedEvents =
//     activeTab === "UPCOMING"
//       ? projectsData.filter((event) => event.completed)
//       : projectsData.filter((event) => !event.completed);

    const handleRegisterClick = (url: string) => {
    window.location.href = url;
    };

  return (
    <>
      <ProgressBar
        height="4px"
        color="#FFA300"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <div className="bg-[#000000]">
        <div className="mx-[5vw] mt-4 flex min-h-screen max-w-7xl flex-col items-center justify-center lg:mx-[10vw] xl:mx-auto">
          {/* Heading and Subheading */}
          <div className="mb-4 h-24 w-full rounded-lg bg-transparent p-4 text-center text-white">
            <h1 className="lg:text-6xl text-3xl font-bold text-ieeeyellow">Projects</h1>
            <p className="lg:text-3xl text-xl text-ieeeyellow">
              Projects made by IEEE-CS
            </p>
          </div>

          {/* Tabs */}
          {/* <div
            className={`mb-4 flex sm:mt-10`}
          >
            <button
              className={`mr-4 text-white ${activeTab === "UPCOMING" ? "border-b-2 border-green-500" : ""}`}
              onClick={() => setActiveTab("UPCOMING")}
            >
              COMPLETED
            </button>
            <button
              className={`mr-4 text-white ${activeTab === "COMPLETED" ? "border-b-2 border-gray-500" : ""}`}
              onClick={() => setActiveTab("COMPLETED")}
            >
              UPCOMING
            </button>
          </div> */}

          {/* Project Cards */}
          <div className="grid w-full grid-cols-1 gap-10 pb-8 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {projectsData.map((event) => (
                <div
                key={event.id}
                className="overflow-hidden rounded-lg bg-black shadow-lg w-full"
                >
                    <div className="p-4 flex">
                        <div className="p-4 flex flex-col">
                            <h1 className="text-white text-xl font-semibold mb-2">
                                {event.title_1}
                            </h1>
                            <p className="text-gray-300 text-sm mb-4">
                                {event.description_1}
                            </p>
                            <div className="flex flex-col gap-4">
                            {[event.imageUrl_1].map(
                                (url, idx) =>
                                url && (
                                    <Image
                                    key={idx}
                                    src={url}
                                    alt={`${event.title_1} - Image ${idx + 1}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-lg"
                                    />
                                )
                            )}
                            </div>
                        </div>

                        <div className="p-4 flex flex-col">
                            <div className="p-4 flex flex-row">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-white text-xl font-semibold mb-2">
                                        {event.title_2}
                                    </h1>
                                    <p className="text-gray-300 text-sm mb-4">
                                        {event.description_2}
                                    </p>
                                </div>

                                {/* <div className="flex flex-col gap-4"> */}
                                {[event.imageUrl_2].map(
                                    (url, idx) =>
                                    url && (
                                        <Image
                                        key={idx}
                                        src={url}
                                        alt={`${event.title_2} - Image ${idx + 1}`}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-lg"
                                        />
                                    )
                                )}
                                {/* </div> */}
                            </div>
                            <div className="p-4 flex flex-row">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-white text-xl font-semibold mb-2">
                                        {event.title_3}
                                    </h1>
                                    <p className="text-gray-300 text-sm mb-4">
                                        {event.description_3}
                                    </p>
                                </div>

                                {/* <div className="flex flex-col gap-4"> */}
                                {[event.imageUrl_3].map(
                                    (url, idx) =>
                                    url && (
                                        <Image
                                        key={idx}
                                        src={url}
                                        alt={`${event.title_3} - Image ${idx + 1}`}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-lg"
                                        />
                                    )
                                )}
                                {/* </div> */}
                            </div>
                        </div>

                    </div>
                
                </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}