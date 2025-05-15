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
  dailyforge,
  termpw,
  payloadmaster,
  threejs,
  soundcloud,
  junglejam,
  mathwork,
  airbnb,
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
    name: "DailyForge",
    description:
      "Gamified Productivity App",
    tags: [
      { name: "HTML" },
      { name: "Python" },
      { name: "Flask" },
      { name: "PostgreSQL" },
    ],
    image: dailyforge,
    git: "https://github.com/myunghun0721/DailyForge",
    source_code_link: "https://dailyforge-1.onrender.com/",
  },
  {
    name: "Animal-Crossingbnb",
    description:
      "Airbnb-style listing platform for Animal Crossing players, allowing users to create and manage their own listings.",
    tags: [
      { name: "HTML" },
      { name: "Javascript" },
      { name: "Express" },
      { name: "PostgreSQL" },
    ],
    image: airbnb,
    git: "https://github.com/myunghun0721/API-project",
    source_code_link: "https://aa-api-project-7o5y.onrender.com/",
  },
  {
    name: "SoundCloud-Clone",
    description:
      "Music Streaming Platform.",
    tags: [
      { name: "HTML" },
      { name: "Javascript" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "AWS s3" },
    ],
    image: soundcloud,
    git: "https://github.com/16kimj97/soundcloud-project",
    source_code_link: "https://soundcloud-project-m0ku.onrender.com/",
  },
  {
    name: "Jungle Jam",
    description:
      "Jungle Jam is an interactive game and featured exhibit at Imagine RIT.",
    tags: [
      { name: "HTML" },
      { name: "OpenCV" },
      { name: "Python" },
      { name: "Pygame" },
    ],
    image: junglejam,
    git: "https://github.com/myunghun0721/junglejam",
    source_code_link: "https://designed.cad.rit.edu/nmcapstone/project/jungle-jam",
  },
];
