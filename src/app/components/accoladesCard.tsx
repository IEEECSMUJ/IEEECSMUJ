import React, { useState } from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import { AccoladesData } from "../competition/page";

// Accolades Card Component
const AccoladesCard = ( data:AccoladesData) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card
      className="bg-ieeegray text-ieeeyellow shadow-lg border border-ieeeorange
                 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
    >
      <CardBody className="p-4">
        <div className="flex flex-col gap-4">
        
          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={data.photos}
              alt={data.hackathonName}
              className="object-cover w-full h-full 
                         transition-transform duration-300 transform hover:scale-110"
            />
          </div>

         
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-ieeeorange">{data.name}</h2>
            <p className="text-sm text-ieeeyellow">
              {showMore ? data.description : `${data.description.slice(0, 60)}...`}
            </p>

            
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-ieeeorange text-black px-3 py-1 
                         rounded-full text-sm hover:bg-ieeeyellow"
            >
              {showMore ? "View Less" : "View More"}
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AccoladesCard;
