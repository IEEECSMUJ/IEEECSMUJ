interface Project {
    id: number;
    title_1: string;
    title_2: string;
    title_3: string;
    description_1: string;
    description_2: string;
    description_3: string;
    imageUrl_1: string;
    imageUrl_2: string;
    imageUrl_3: string;
  }

  import image1 from "../../../public/galleryProjects/SightScope-b1f8b5dd.webp";
  import image2 from "../../../public/galleryProjects/BluetoothCar-ad00867e.webp";
  import image3 from "../../../public/galleryProjects/ReinforcementLearningBasedTradingBot-cc69a456.webp";
  import image4 from "../../../public/galleryProjects/TaskVision-0f1d5592.webp";
  import image5 from "../../../public/galleryProjects/NLP-95fe17cd.webp";
  import image6 from "../../../public/galleryProjects/StockAndoirdForXiaomiPhones-befaa1a0.webp";
  import image7 from "../../../public/galleryProjects/CncAutomaticDrawingMachine-0b84e7e3.webp";
  import image8 from "../../../public/galleryProjects/EyeTracker-97a72307.webp";
  import image9 from "../../../public/galleryProjects/RoboticArm-9d937da7.webp";

  
  const projectsData: Project[] = [
    {
      id: 1,
      title_1: "Sight Scope",
      title_2: "",
      title_3: "",
      description_1: "Under the umbrella of ACM Xperience, Sight Scope addresses accessibility concerns by employing AI to generate descriptive captions for images. This innovative approach assists individuals with visual impairments, enriching their digital experience by providing detailed information about the content of images.",
      description_2: "",
      description_3: "",
      imageUrl_1: image1.src,
      imageUrl_2: "",
      imageUrl_3: "",
    },
    {
      id: 2,
      title_1: "",
      title_2: "Bluetooth Car",
      title_3: "",
      description_1: "",
      description_2: "Under the realm of ACM Xperience, the amalgamation of Arduino and Bluetooth technology manifests in a remote-controlled car project. Beyond its recreational appeal, this initiative embodies a practical application of embedded systems and wireless communication within the domain of robotics.",
      description_3: "",
      imageUrl_1: "",
      imageUrl_2: image2.src,
      imageUrl_3: "",
    },
    {
      id: 3,
      title_1: "",
      title_2: "",
      title_3: "Reinforcement learning based trading bot",
      description_1: "",
      description_2: "",
      description_3: "Within the realm of ACM Xperience, this project redefines stock trading strategies by leveraging reinforcement learning for intelligent decision-making. Adapting and learning from market conditions, it exemplifies the transformative potential of AI in optimizing trading algorithms and decision processes.",
      imageUrl_1: "",
      imageUrl_2: "",
      imageUrl_3: image3.src,
    },
    {
      id: 4,
      title_1: "Task vision",
      title_2: "",
      title_3: "",
      description_1: "In the grand pursuit of advancement, ACM Xperience propels the domain of task management into a regal future with Task Vision—a cutting-edge 3D augmented reality-based application for to-do lists. Here, users seamlessly conjure and arrange tasks within a three-dimensional expanse, introducing a visually captivating and novel dimension to the organization of duties. Behold, a splendid and innovative approach to the orchestration of tasks",
      description_2: "",
      description_3: "",
      imageUrl_1: image4.src,
      imageUrl_2: "",
      imageUrl_3: "",
    },
    {
      id: 5,
      title_1: "",
      title_2: "NLP based system for prior authorisation",
      title_3: "",
      description_1: "",
      description_2: "Within the ACM Xperience framework, this project streamlines insurance processes by leveraging natural language processing for efficient prior authorization. It highlights the transformative potential of NLP in the insurance sector, enhancing the speed and accuracy of processing insurance claims.",
      description_3: "",
      imageUrl_1: "",
      imageUrl_2: image5.src,
      imageUrl_3: "",
    },
    {
      id: 6,
      title_1: "",
      title_2: "",
      title_3: "Stock Andriod for Xiaomi phones",
      description_1: "",
      description_2: "",
      description_3: "Under the umbrella of ACM Xperience, this initiative focuses on elevating user experience by developing a customized iteration of the Android Open Source Project (AOSP) specifically designed for Xiaomi phones. The primary goal is to enhance performance, stability, and features, ultimately delivering users an optimized and seamless Android experience on their Xiaomi devices.",
      imageUrl_1: "",
      imageUrl_2: "",
      imageUrl_3: image6.src,
    },
    {
      id: 7,
      title_1: "CNC Automatic Drawing Machine",
      title_2: "",
      title_3: "",
      description_1: "Beneath the regal aegis of ACM Xperience, this project heralds a new epoch in artistic refinement through a CNC-controlled drawing machine. The harmonious synthesis of artistry and technology unfolds as the CNC system, guided by G-code instructions and driven by precision stepper motors, orchestrates the meticulous creation of intricate drawings. This avant-garde endeavor epitomizes the seamless integration of creativity and advanced processes, ascending to distinguished technical heights within the convergence of art and technology.",
      description_2: "",
      description_3: "",
      imageUrl_1: image7.src,
      imageUrl_2: "",
      imageUrl_3: "",
    },
    {
      id: 8,
      title_1: "",
      title_2: "Eye Blink Tracker",
      title_3: "",
      description_1: "",
      description_2: "Enveloped within the vast dominion of ACM Xperience, this project transcends elemental tracking, harnessing the intricacies of eye blink data for both user interface control and health monitoring. Employing state-of-the-art infrared sensors and advanced computer vision algorithms, it discerns and interprets the nuances of eye blink patterns with precision. This distinguished exploration of hands-free interactions not only unlocks unprecedented possibilities but also imparts refined insights into health conditions associated with distinctive eye movements. The project thus stands as a testament to technical sophistication and versatile ingenuity within the esteemed realm of ACM Xperience.",
      description_3: "",
      imageUrl_1: "",
      imageUrl_2: image8.src,
      imageUrl_3: "",
    },
    {
      id: 9,
      title_1: "",
      title_2: "",
      title_3: "Robotic Arm",
      description_1: "",
      description_2: "",
      description_3: "Within the comprehensive scope of ACM Xperience, this robotic arm, equipped with five degrees of freedom, is meticulously crafted for precision and controlled movements. Its utility extends across a spectrum of fields, encompassing manufacturing, research, and automation, exemplifying the multifaceted applications and adaptability inherent in robotic technologies.",
      imageUrl_1: "",
      imageUrl_2: "",
      imageUrl_3: image9.src,
    },
  
  ];
  export default projectsData;
  