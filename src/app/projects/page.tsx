"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import projectsData from "~/app/data/projectdata";
import Image from "next/image";

export default function Page() {
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

          {/* Project Cards */}
          <div className="grid w-full grid-cols-1 gap-10 pb-8 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {projectsData.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden rounded-lg bg-black shadow-lg w-full"
              >
                {/* Render only the section with content */}
                <div className="sexy flex">
                  {event.title_1 && (
                    <div className="p-4 flex flex-col">
                      {event.imageUrl_1 && (
                        <Image
                          src={event.imageUrl_1}
                          alt={`${event.title_1} - Image 1`}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                      <h1 className="text-white text-xl font-semibold mb-2">
                        {event.title_1}
                      </h1>
                      <p className="text-gray-300 text-sm mb-4">
                        {event.description_1}
                      </p>
                    </div>
                  )}
                  <div className="parent gid grid-rows-2">
                    <div className="sub_parent row-span-1">
                      {event.title_2 && (
                        <div className="child p-4 flex flex-row">
                          {event.imageUrl_2 && (
                            <Image
                              src={event.imageUrl_2}
                              alt={`${event.title_2} - Image 2`}
                              width={500}
                              height={300}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          )}
                          <div className="sub_child flex flex-col">
                            <h1 className="text-white text-xl font-semibold mb-2">
                              {event.title_2}
                            </h1>
                            <p className="text-gray-300 text-sm mb-4">
                              {event.description_2}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="sub_parent row-span-1">
                      {event.title_3 && (
                        <div className="child p-4 flex flex-row">
                          {event.imageUrl_3 && (
                            <Image
                              src={event.imageUrl_3}
                              alt={`${event.title_3} - Image 3`}
                              width={500}
                              height={300}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          )}
                          <div className="sub_child flex flex-col">
                            <h1 className="text-white text-xl font-semibold mb-2">
                              {event.title_3}
                            </h1>
                            <p className="text-gray-300 text-sm mb-4">
                              {event.description_3}
                            </p>
                          </div>
                        </div>
                      )}
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