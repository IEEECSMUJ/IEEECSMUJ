import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Changed to Next.js Image
import { Card, CardBody, Button } from "@heroui/react";
import { AccoladesData } from "../competition/page";

// Accolades Card Component
const AccoladesCard = (data: AccoladesData) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        className="relative text-ieeeyellow shadow-lg transition-all duration-300 
                   hover:scale-[1.05] hover:shadow-xl hover:bg-opacity-80
                   rounded-xl overflow-hidden w-[350px] h-[450px]"
      >
        <Image
          src={data.photos}
          alt={data.hackathonName}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
        />

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 z-20 p-5 flex flex-col justify-center items-center gap-4"
            >
              <h2 className="text-lg font-bold text-ieeeorange">{data.hackathonName}</h2>
              <p className="text-sm text-ieeeyellow text-center">{data.description}</p>
              <Button
                onClick={() => setShowMore(false)}
                className="bg-ieeeorange text-black px-3 py-1 
                           rounded-full text-sm hover:bg-ieeeyellow"
              >
                View Less
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!showMore && (
          <CardBody className="absolute bottom-0 left-0 right-0 z-10 p-5 bg-black/70">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-ieeeorange">{data.hackathonName}</h2>
              <p className="text-sm text-ieeeyellow">
                {data.description.slice(0, 60)}...
              </p>

              <Button
                onClick={() => setShowMore(true)}
                className="bg-ieeeorange text-black px-3 py-1 
                           rounded-full text-sm hover:bg-ieeeyellow"
              >
                View More
              </Button>
            </div>
          </CardBody>
        )}
      </Card>
    </motion.div>
  );
};

export default AccoladesCard;
