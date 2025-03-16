"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { motion } from "framer-motion";
import AccoladesCard from "../components/accoladesCard";


const accoladesData = [
    {
      id: 0,
      hackathonName: "Bits",
      description: "We secured 2nd place in the Bits Hackathon with our innovative AI-based solution.",
      photos: "https://plus.unsplash.com/premium_photo-1681400688788-a5fd7e7bcd89?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "2",
    },
    {
      id: 1,
      hackathonName: "Postman",
      description: "Our team excelled in the Postman Hackathon by building a robust API testing framework.",
      photos: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      position: "3",
    },
    {
      id: 2,
      hackathonName: "Devfolio",
      description: "We created a decentralized app that won 1st place in the Devfolio Hackathon.",
      photos: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      position: "1",
    },
    {
      id: 3,
      hackathonName: "Codeforces",
      description: "Ranked among the top 5 teams in a challenging competitive coding hackathon.",
      photos: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      position: "4",
    },
    {
      id: 4,
      hackathonName: "Hack The North",
      description: "Built a cutting-edge IoT solution that improved smart home automation.",
      photos: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      position: "5",
    },
    {
      id: 5,
      hackathonName: "MLH Local Hack Day",
      description: "Contributed to an open-source project that won the 'Best Collaboration' award.",
      photos: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      position: "2",
    },
    {
      id: 6,
      hackathonName: "TechFest",
      description: "Our project on sustainable tech won accolades for environmental impact.",
      photos: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
      position: "3",
    },
    {
      id: 7,
      hackathonName: "Google Solution Challenge",
      description: "Our solution for mental health support earned special recognition.",
      photos: "https://images.unsplash.com/photo-1581092795360-0f49c174af3b",
      position: "1",
    },
    {
      id: 8,
      hackathonName: "Microsoft Imagine Cup",
      description: "Our innovative project in healthcare received the 'Best Innovation' award.",
      photos: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      position: "1",
    },
    {
      id: 9,
      hackathonName: "AI For Good Challenge",
      description: "Our AI-driven disaster prediction system received widespread appreciation.",
      photos: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
      position: "2",
    },
];

  

  

export type AccoladesData = {
  id: number;
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
};

const Competition = () => {
    return (
      <>
        <div className="scroll-smooth">
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
              <div className="mx-auto px-4 lg:px-8">
                <p className="text-center text-5xl font-bold text-ieeeyellow">
                  IEEE CS Accolades
                </p>
              </div>
            </div>
  
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <motion.div
                className="mx-auto grid grid-cols-1 justify-center gap-16 md:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.2, // Delayed effect for each card
                    },
                  },
                }}
              >
                {accoladesData.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <AccoladesCard
                      id={item.id}
                      hackathonName={item.hackathonName}
                      description={item.description}
                      photos={item.photos}
                      position={item.position}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </>
    );
  };
  
  export default Competition;