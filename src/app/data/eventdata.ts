interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
  venue: string;
  dateAndTime: string;
  registerUrl: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "MockUp 3.0",
    description: "A 24-hour Nationwide UI/UX Design Challenge, offering free registration and cash prizes of up to Rs. 10,000 for participants.",
    imageUrl: "https://images.prismic.io/ieeemuj/302689aa-c11e-4797-8fb7-54521454c68d_MOCKUP-3.0-FINAL-POSTER.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 2,
    title: "Epitech",
    description: "Talk with Harsh Anand, EBA Operations Director, explores key insights into entrepreneurship and business transformation",
    imageUrl: "https://images.prismic.io/ieeemuj/e2715c33-9ce1-40ee-9543-079c597d0414_epitech-poster.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 3,
    title: "Know Your Domain",
    description: "Explore tech passions in a 5-day event featuring expert insights on UI/UX, Web & App Development, Data Science, and AI/ML.",
    imageUrl: "https://images.prismic.io/ieeemuj/3c67358b-6121-47db-a431-409fbc818b2d_KYD+POSTER.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 4,
    title: "Blog Buster",
    description: "A timed contest, participants to create technical blogs in core domains, with cash prizes and publication on IEEE CS MUJ's official Medium page.",
    imageUrl: "https://images.prismic.io/ieeemuj/2d2b1eb0-9dc3-4f15-9e89-c2ea47b3c820_IMG-20230711-WA0112.jpg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 5,
    title: "Fostering the Future 7.0",
    description: "Annual IEEE CS, MUJ event with Microsoft engineer Tanuj Sahal guiding students on navigating college, internships, and technical domains.",
    imageUrl: "https://images.prismic.io/ieeemuj/6c7c6fda-0534-4d82-8b89-7d7750303b6b_Poster+FTF.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 6,
    title: "Mltiverse",
    description: "36-hour Kaggle challenge for MUJ, IEEE members, and students nationwide. Showcasing machine learning skills through practical problem-solving.",
    imageUrl: "https://images.prismic.io/ieeemuj/c37f960f-1973-49a3-b210-515f0e59c5b5_MLtiVerse+Poster.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 7,
    title: "Fostering the Future 5.0",
    description: " Fostering The Future: Ms. Aayushi, a MUJ alum at Goldman Sachs, shares career insights, aiding MUJ students and IEEE members.",
    imageUrl: "https://images.prismic.io/ieeemuj/0a22c43f-1a57-47ea-a038-91f9f3eac445_fof5.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 8,
    title: "Eth-Real",
    description: "IEEE CS event at MUJ exploring Web3 technologies with expert speakers Utkarsh Shrivastava and Pranshul Saxena from Threeway.studio.",
    imageUrl: "https://images.prismic.io/ieeemuj/22838764-8e99-42bb-8528-5f9d5032b52d_ethreal.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 9,
    title: "Foster the Future 6.0",
    description: "Fostering the Future 2022 alumni Tushar Sardana discussing Data Science, work culture, engaging a diverse audience both offline and online.",
    imageUrl: "https://images.prismic.io/ieeemuj/c151e769-0dee-45c6-8663-58b017f44921_fof6.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 10,
    title: "Hackerzstreet 1.0",
    description: "IEEE CS MUJ's first Hackathon, Hackerzstreet 1.0: A 24-hour online challenge on July 9-10, 2022, fostering creativity and programming skills",
    imageUrl: "https://images.prismic.io/ieeemuj/6301f722-c9a8-43f8-8eb3-2e6b97e7eabb_hackerzstreet.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 11,
    title: "MockUp 2.0",
    description: "24-hr UI/UX event for MUJ and IEEE. Showcase talent, foster innovation. Teams present designs, submit PDFs. Bridging theory-practice in UI/UX.",
    imageUrl: "https://images.prismic.io/ieeemuj/5dee8c24-dbf6-4a22-9dc7-4981f8bf3e08_mockup2.0.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 12,
    title: "Vikrant",
    description: "IEEE CS MUJ's Vikrant seminar, Sep 10, 2022, with Retd. Navy Captain Abhijit Dey, delved into military tech. Engaging 200+ registrations, a success.",
    imageUrl: "https://images.prismic.io/ieeemuj/13c980fe-2aaa-45b4-9b13-2777f6a8a2e8_vikrant.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 13,
    title: "Battleship",
    description: "IEEE CS at MUJ presents Battleship: A coding game day fostering technical culture and problem-solving for MUJ students and IEEE members.",
    imageUrl: "https://images.prismic.io/ieeemuj/092ac40d-c57a-42a5-b263-c56bb574151f_battleship.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 14,
    title: "Epiphany",
    description: "24-hour ideathon at MUJ, presenting business models to judges like Ram Sharma and Aman Virmani. Open to all.",
    imageUrl: "https://images.prismic.io/ieeemuj/9cd945b3-8d63-4cf2-a637-3aa74ac644c5_ephiphany.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 15,
    title: "Epiphany 2.0",
    description: "Unleash creativity! 💡🧠 Join on 10-11 Feb at 307, AB-1, 10 am. Exciting chance to win Rs. 10K. Entry is free! 🚀 Enjoy the thrilling journey with us!",
    imageUrl: "https://images.prismic.io/ieeemuj/31c144b8-a992-482d-aa53-26bbe9249d36_WhatsApp+Image+2024-02-06+at+18.29.19.jpeg?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 16,
    title: "En-Code",
    description: "IEEE CS MUJ X Oneiros presents <en-Code>, a coding battle with a 10K prize pool! 🚀 Sharpen your algorithms and conquer for a chance to win big! 💸",
    imageUrl: "https://images.prismic.io/ieeemuj/049efa5c-d213-4904-9da9-2b476fad8dbe_ENCODE+final.png?auto=compress,format",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 17,
    title: "HackerzStreet 2.0",
    description: "Gear up for an adrenaline-fueled 24-hour coding marathon at Hackerzstreet 2.0, the ultimate tech showdown.🔥",
    imageUrl: "https://images.prismic.io/ieeemuj/Zg0-j8t2UUcvBWwc_for-print-low-res.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 18,
    title: "Weakest Link",
    description: "Answer trivia, strategize with your team, but beware: one wrong move could spell doom. 🪄",
    imageUrl: "https://images.prismic.io/ieeemuj/ZhabUDjCgu4jzuoM_weakest_link_poster.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 19,
    title: "F1nalyze",
    description: "Gear up for a high-speed, data-driven adventure at the ultimate 24 hour datathon, F1nalyze! 🏎",
    imageUrl: "https://images.prismic.io/ieeemuj/ZnVFFZm069VX18ao_WhatsAppImage2024-06-20at14.37.44_b7e57d81.jpg?auto=format,compress",
    completed: true,
    venue: "Online",
    dateAndTime: "Unknown|Unknown",
    registerUrl: "https://forms.gle/XeLsi8wWwVxKL3Q48"
  },
  {
    id: 20,
    title: "Breaking Bug",
    description: "An exciting challenge where even the tiniest bugs can be game changers, and hold up! Is that an secret trove of easter bugs? 🐞",
    imageUrl: "https://images.prismic.io/ieeemuj/ZqYJpR5LeNNTxizl_WhatsAppImage2024-07-27at19.22.16_b55b37b0.jpg?auto=format,compress",
    completed: true,
    venue: "Online",
    dateAndTime: "Unknown|Unknown",
    registerUrl: "https://forms.gle/8ro7gESQssspxN2T8"
  },
  {
    id: 21,
    title: "Git it Done",
    description: "A hands-on workshop and unlock the full power of GitHub- from mastering version control to nailing that GSoC 🎖",
    imageUrl: "https://images.prismic.io/ieeemuj/Z0iy5JbqstJ974Kh_GITITDONEPOSTER.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 22,
    title: "FTF 8.0",
    description: "MUJ alumnus Vaibhav Barodawala from Nvidia articulated valuable insights on mastering core CS fundamentals and strategic utilization of modern tech stacks.",
    imageUrl: "https://images.prismic.io/ieeemuj/aEBlO7h8WN-LVmfc_FTF-GREEN%5B1%5D.png?auto=format,compress",
    completed: true,
    venue: "online",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 23,
    title: "Snatch",
    description: "Snatch was a high intensity coding gauntlet where teams battled in a problem-solving crusade of wits and synergy",
    imageUrl: "https://images.prismic.io/ieeemuj/aEBlzbh8WN-LVmhm_CTFsnatch%5B1%5D.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 24,
    title: "T-Minus",
    description: "T-Minus was a ticking warzone of tech, wit, nerve, and focus where teams raced against time to crack codes, dodge lasers,and conquer high-tech challenges.",
    imageUrl: "https://images.prismic.io/ieeemuj/aEBl9rh8WN-LVmh8_T-MINUS%5B1%5D.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 25,
    title: "Mockup 4.0",
    description: "Mockup 4.0 was a 24-hour designathon where aspiring designers and startup enthusiasts transformed raw ideas into innovative digital experiences",
    imageUrl: "https://images.prismic.io/ieeemuj/aEBmILh8WN-LVmia_MOCKUP%5B1%5D.png?auto=format,compress",
    completed: true,
    venue: "online",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 26,
    title: "HackerzStreet 3.0",
    description: "Hackerzstreet 3.0 is a 24-hour high octane hackathon where caffeine meets code, chaos sparks creativity and only the sharpest minds survive",
    imageUrl: "https://images.prismic.io/ieeemuj/aEBmR7h8WN-LVmiy_HSPoster%5B1%5D.png?auto=format,compress",
    completed: true,
    venue: "AB1",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
  {
    id: 27,
    title: "Burnout",
    description: "Burnout is a fast paced MotoGP-themed datathon where every second counts,each dataset was a curve and only the sharpest minds make it to the finish line",
    imageUrl: "https://images.prismic.io/ieeemuj/aExUQ7NJEFaPX9Bv_burnout.jpg?auto=format,compress",
    completed: true,
    venue: "online",
    dateAndTime: "Unknown|Unknown",
    registerUrl: ""
  },
];
export default eventsData;
