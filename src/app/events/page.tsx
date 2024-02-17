"use client";

import React, { useState } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import eventsData from "~/app/data/eventdata";


export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("COMPLETED");

 
  const displayedEvents =
    activeTab === "UPCOMING"
      ? eventsData.filter((event) => event.id >= 1 && event.id <= 15)
      : eventsData.filter((event) => event.id > 15);

      const handleRegisterClick = () => {
       
        window.location.href = "https://forms.gle/UrpWtYtHV1HygMA77"; 
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
            <h1 className="text-6xl font-bold text-ieeeyellow">Events</h1>
            <p className="text-3xl text-ieeeyellow">
              Discover our upcoming events
            </p>
          </div>

          {/* Tabs */}
          <div
            className={`mb-4 flex ${window.innerWidth < 640 ? "mt-10" : ""}`}
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
          </div>

          {/* Event Cards */}
          <div className="grid w-full grid-cols-1 gap-10 pb-8 pt-10 sm:grid-cols-2 md:grid-cols-3">
        {displayedEvents.map((event) => (
          <div
            key={event.id}
            className="overflow-hidden rounded-lg bg-black shadow-lg w-full"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
            <div className="p-4">
              <h1 className="text-white-800 text-xl font-semibold">
                {event.title}
              </h1>
              <p className="text-white-600 mt-2 text-sm">
                {event.description}
              </p>
              {event.id === 16 ? (
                <div
                  onClick={() => handleRegisterClick()}
                  className="mt-4 block rounded-full bg-[#FFA300] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-yellow-700 cursor-pointer"
                >
                  Register
                </div>
              ) : (
                <Link href={
                  // ⚠️ REMOVE BEFORE FLIGHT!!! ⚠️
                  // TODO: `/events/${event.id}`
                  "/wip/"
                  }>
                  <div className="mt-4 block rounded-full bg-[#FFA300] px-4 py-2 font-semibold text-white transition duration-300 hover:bg-yellow-700">
                    Know More
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </>
  );
}

