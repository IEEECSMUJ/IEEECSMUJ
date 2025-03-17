"use client";

import React, { useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { motion } from "framer-motion";
import projectsData from "~/app/data/projectdata";
import Image from "next/image";

export default function Page() {
  const [showMore, setShowMore] = useState<number | null>(null);

  const toggleShowMore = (id: number) => {
    setShowMore((prev) => (prev === id ? null : id));
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
        <div className="mx-[5vw] flex min-h-screen max-w-7xl flex-col items-center justify-center lg:mx-[10vw] xl:mx-auto">
          {/* Heading and Subheading */}
          <div className="mb-12 h-24 w-full rounded-xl bg-transparent p-4 text-center text-white">
            <h1 className="lg:text-6xl text-3xl font-bold text-ieeeyellow">
              Projects
            </h1>
            <p className="lg:text-3xl text-xl text-ieeeyellow mt-6">
              Unveiling Creativity in Computing
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid w-full grid-cols-1 gap-10 pb-8 pt-10 sm:grid-cols-2 md:grid-cols-2">
            {projectsData.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 163, 0, 0.5)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden rounded-xl bg-black shadow-lg w-full"
              >
                <div className="parent_div p-4 flex flex-col">

                  {/* Card 1.0  */}
                  {event.imageUrl_1 && (
                    <div className="child_div p-4 flex flex-col">
                      <Image
                        src={event.imageUrl_1}
                        alt={`${event.title_1} - Image`}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover rounded-tl-2xl rounded-tr-2xl"
                      />
                      <h1 className="text-ieeeyellow text-xl font-semibold mt-4">
                        {event.title_1}
                      </h1>
                      <p className="text-gray-300 text-sm mt-2">
                        {showMore === event.id
                          ? event.description_1
                          : `${event.description_1.substring(0, 100)}...`}
                      </p>
                      {event.description_1.length > 100 && (
                        <button
                          className="text-ieeeyellow mt-2 text-sm underline cursor-pointer self-end"
                          onClick={() => toggleShowMore(event.id)}
                        >
                          {showMore === event.id ? "View Less" : "View More"}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Card 2  */}
                  {event.imageUrl_2 && (
                    <div className="child_div p-4 flex flex-row items-center">
                      <Image
                        src={event.imageUrl_2}
                        alt={`${event.title_2} - Image`}
                        width={200}
                        height={200}
                        className="w-1/3 h-48 object-cover rounded-tl-2xl rounded-bl-2xl"
                      />
                      <div className="ml-4">
                        <h1 className="text-ieeeyellow text-xl font-semibold">
                          {event.title_2}
                        </h1>
                        <p className="text-gray-300 text-sm">
                          {showMore === event.id
                            ? event.description_2
                            : `${event.description_2.substring(0, 100)}...`}
                        </p>
                        <div className="flex  flex-row">
                          <div className="flex-auto"></div>
                          {event.description_2.length > 100 && (
                            <button
                              className="text-ieeeyellow mt-2 text-sm underline cursor-pointer justify-between"
                              onClick={() => toggleShowMore(event.id)}
                            >
                              {showMore === event.id ? "View Less" : "View More"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 3  */}
                  {event.imageUrl_3 && (
                    <div className="child_div p-4 flex flex-col">
                      <Image
                        src={event.imageUrl_3}
                        alt={`${event.title_3} - Image`}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover rounded-tl-2xl rounded-tr-2xl"
                      />
                      <h1 className="text-ieeeyellow text-xl font-semibold mt-4">
                        {event.title_3}
                      </h1>
                      <p className="text-gray-300 text-sm mt-2">
                        {showMore === event.id
                          ? event.description_3
                          : `${event.description_3.substring(0, 100)}...`}
                      </p>
                      {event.description_3.length > 100 && (
                        <button
                          className="text-ieeeyellow mt-2 text-sm underline cursor-pointer self-end"
                          onClick={() => toggleShowMore(event.id)}
                        >
                          {showMore === event.id ? "View Less" : "View More"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
