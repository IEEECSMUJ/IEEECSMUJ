"use client";
import React, { useState } from 'react';
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import  AccoladesCard  from '../components/accoladesCard';

// Define the props interface
interface AccoladesCardProps {
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
  fullWidth: boolean;
  iconApp?: boolean;
  buttonText?: string;
  subtext?: string;
  id?: number;
}



const accoladesData = [
  {
    id: 0,
    hackathonName: "WHAT TO WATCH",
    description: "Stream the Acme event live from anywhere in the world. Enjoy exclusive insights, behind-the-scenes content, and interviews with the creators.",
    photos: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    position: "2",
    fullWidth: false,
  },
  {
    id: 1,
    hackathonName: "PLANT A TREE",
    description: "Contribute to the planet by planting trees in deforested regions. Your contribution helps create a greener future for all.",
    photos: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    position: "3",
    fullWidth: false,
  },
  {
    id: 2,
    hackathonName: "SUPERCHARGED",
    description: "Unleash the beast with Acme's latest innovation. Experience speed, power, and performance like never before with our cutting-edge technology.",
    photos: "https://plus.unsplash.com/premium_photo-1675355675360-a0cfa025f682?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "1",
    fullWidth: false,
  },
  {
    id: 3,
    hackathonName: "NEW",
    description: "Introducing the Acme camera — redefining photography with ultra-clear lenses, enhanced low-light performance, and seamless connectivity. Available soon. Get notified.",
    subtext: "Available soon. Get notified.",
    photos: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    position: "4",
    fullWidth: false,
  },
  {
    id: 4,
    hackathonName: "YOUR DAY YOUR WAY",
    description: "Discover a personalized checklist designed to improve your sleep quality. Stay consistent with your schedule for optimal rest and energy.",
    photos: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    position: "1",
    fullWidth: true,
  },
  {
    id: 5,
    hackathonName: "Breathing App",
    description: "Get a good night's sleep with guided breathing exercises, soothing soundscapes, and mindfulness activities tailored to reduce stress.",
    photos: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    position: "2",
    fullWidth: false,
  },
  {
    id: 6,
    hackathonName: "WELLNESS HUB",
    description: "Your one-stop solution for mental well-being with curated resources, expert advice, and interactive workshops designed for a healthier mind.",
    photos: "https://images.unsplash.com/photo-1727468802134-bec46e3faee9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "3",
    fullWidth: false,
  },
  {
    id: 7,
    hackathonName: "ACME FITNESS",
    description: "Level up your fitness game with customized workout routines, calorie trackers, and progress insights designed to match your goals.",
    photos: "https://images.unsplash.com/photo-1741017162002-fac8e37509f9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "2",
    fullWidth: false,
  },
  {
    id: 8,
    hackathonName: "TRAVEL SMART",
    description: "Experience hassle-free travel with curated itineraries, must-visit landmarks, and travel safety tips for an unforgettable journey.",
    photos: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    position: "1",
    fullWidth: true,
  },
  {
    id: 9,
    hackathonName: "INNOVATE",
    description: "Join the world's brightest minds in creating groundbreaking solutions for real-world challenges through innovation and creativity.",
    photos: "https://images.unsplash.com/photo-1510070009289-b5bc34383727",
    position: "3",
    fullWidth: false,
  },
];

const Competition = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-full bg-fixed py-12">
        <div className="mx-auto px-4 lg:px-8">
          <p className="text-center text-5xl font-bold text-ieeeyellow">
            IEEE CS Accolades
          </p>
        </div>
      </div>
      <ProgressBar
        height="4px"
        color="#FFA300"
        options={{ showSpinner: false }}
        shallowRouting
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accoladesData.map((item) => (
            <AccoladesCard
              key={item.id}
              {...item} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;