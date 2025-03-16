"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

export type AccoladesData = {
  id: number;
  hackathonName: string;
  description: string;
  extendedDescription?: string;
  photos: string;
  position: string;
  fullWidth?: boolean;
};

const AccoladesCard = ({
  id,
  hackathonName,
  description,
  extendedDescription,
  photos,
  fullWidth,
}: AccoladesData) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{
        scale: showMore ? 1 : 1.04,
      }}
      className={`relative rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-out ${
        fullWidth ? "col-span-2" : ""
      }`}
      style={{
        height: fullWidth ? "350px" : id === 3 ? "500px" : "300px",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={photos}
          alt={hackathonName}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      </div>

      {/* Bottom Content Section with Gradient Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 z-10">
        <h2 className="text-lg font-bold text-ieeeorange">{hackathonName}</h2>
        <p className="text-sm text-white">{description.slice(0, 60)}...</p>

        {extendedDescription?.trim() && (
          <Button
            onClick={() => setShowMore(true)}
            className="bg-ieeeorange text-black px-3 py-1 rounded-full text-sm hover:bg-ieeeyellow mt-2"
          >
            View More
          </Button>
        )}
      </div>

     
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 z-20 p-5 flex flex-col justify-center items-center gap-4"
          >
            <h2 className="text-lg font-bold text-ieeeorange">{hackathonName}</h2>
            <p className="text-sm text-ieeeyellow text-center max-w-[80%]">
              {extendedDescription || description}
            </p>
            <Button
              onClick={() => setShowMore(false)}
              className="bg-ieeeorange text-black px-3 py-1 rounded-full text-sm hover:bg-ieeeyellow"
            >
              View Less
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccoladesCard;
