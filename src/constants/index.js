import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  aa,
  web,
  edu,
  vue,
  express,
  flask,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

export const services = [
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  //frameworks
  { name: "React", icon: reactjs },
  { name: "Vue", icon: vue },
  { name: "Express", icon: express },
  { name: "Flask", icon: flask },
];

export const experiences = [
  {
    title: "Warehouse associate",
    company_name: "Toki mats | California, CA",
    icon: web,
    iconBg: "#fff",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Worked as a Warehouse Associate at Toki Mats during my job search, handling inventory management, order fulfillment, packaging, and shipping to ensure timely and accurate delivery while maintaining a clean and organized workspace."
    ],
  },
  {
    title: "Software Engineer Bootcamp",
    company_name: "App Academy | Online",
    icon: aa,
    iconBg: "#fff",
    date: "Spring 2024",
    points: [
      "Completed a full-time, immersive Software Engineering Bootcamp at App Academy, covering full-stack web development, data structures, algorithms, and collaborative coding through pair programming and real-world projects using modern tech stacks."
    ],
  },
  {
    title: "Graduated",
    company_name: "Rochester Institute of Technology | Rochester, NY",
    icon: edu,
    iconBg: "#fff",
    date: "Spring 2023",
    points: [
      "Graduated from Rochester Institute of Technology with a Bachelor’s degree in New Media Interactive Development, combining design, development, and user experience to build engaging and functional digital products across platforms."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Rochester Institute of Technology | Rochester, NY",
    icon: web,
    iconBg: "#fff",
    date: "Jan 2023 - May 2023",
    points: [
      "Designed and delivered a static website that could be maintained by non-techical users post-graduation.",
      "Implemented clean, accessible UI using HTML and CSS tailored to client needs."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Rochester Institute of Technology | Rochester, NY",
    icon: web,
    iconBg: "#fff",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developed an immersive web-based 3D experience using Three.js.",
      "Created an interactive character story environment to enhance user engagement before gameplay."
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
