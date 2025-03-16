"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { motion } from "framer-motion";
import AccoladesCard from "../components/accoladesCard";


const accoladesData = [
  {
    id: 0,
    hackathonName: "Bits",
    description: "we won a hackathon",
    photos: "./../../../public/opengraph-image.jpg",
    position: "2",
  },
  {
    id: 1,
    hackathonName: "Postman",
    description: "we won a hackathon",
    photos: "./../../../public/opengraph-image.jpg",
    position: "3",
  },
];

export type AccoladesData = {
  id: number;
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
};

const page = () => {
  return (
    <>
      <div>
        <ProgressBar
          height="4px"
          color="#FFA300"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <motion.div
          className="bg-[#000000]"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "linear", type: "tween" }}
        >
          <div className="w-full bg-fixed py-12">
            <div className=" mx-auto px-4 lg:px-8">
              <p className="text-center text-5xl font-bold text-ieeeyellow">
                IEEE CS Accolades
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div>
              <div className="mx-auto grid grid-cols-1 justify-center gap-16 md:grid-cols-3">
                {accoladesData.map((item) => (
                  <AccoladesCard key={item.id} id={item.id} hackathonName={item.hackathonName} description={item.description} photos={item.photos} position={item.position}   />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
