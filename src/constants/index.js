import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  java,
  cpp,
  mysql,
  kiit,
  stjoans,
  ClimateDashboard,
  flowCanvas,
  movieRecommenderSystem,
  Nutrinova,
  virtualAssistant,
  PingChat,
  NextJs,
  AngularJS,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon: backend,
  },
  {
    title: "System Design",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "NextJs", icon: NextJs },
  { name: "AngularJs", icon: AngularJS },
  { name: "MySQL", icon: mysql },
  { name: "git", icon: git },
  { name: "python", icon: python },
  { name: "java", icon: java },
  { name: "cpp", icon: cpp },
];

const experiences = [
  {
    title: "B.Tech (CSE)",
    company_name: "Kalinga Institute of Industrial Technology University",
    icon: kiit,
    date: "2022 - 2026",
    points: [
      "Currently pursuing my 7th sem B.Tech in CSE, have participated in numerous hackathons with my fellow teammates like SIH and Providence LEAP Ideathon. Learning and developing Full Stack along with Machine Learning Algorithms. Part of Society like IoT Lab."
    ],
  },
  {
    title: "Class-XII (WBCHSE)",
    company_name: "St.Anthony's High School",
    icon: stjoans,
    iconBg: "#383E56",
    date: "2020 - 2022",
    points: [
      "Completed Higher Secondary (WBCHSE) with 92.6% in Science, consistently performed well academically, and actively participated in coding challenges and tech exhibitions.",
    ],
  },
  {
    title: "Class-X (WBBSE)",
    company_name: "St.Anthony's High School",
    icon: stjoans,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Completed WBBSE (Class X) with 90%, with active involvement in exhibitions, events, sports, and debates throughout school life.",
    ],
  }
];

const learningJourney = {
  codingProfiles: [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/Uddipta_Singha_04/", 
    },
    {
      platform: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/user_t6sl6lxx8k2",
    },
  ],
  certifications: [
    {
      title: "Certified Angular Developer",
      issuer: "Infosys Springboard",
    },
    {
      title: "Red Hat System Administration I",
      issuer: "Red Hat Academy",
    },
    {
      title: "Introduction to DevOps",
      issuer: "IBM",
    },

  ],
  programs: [
    {
      title: "Google Cloud Arcade Facilitator Program (Champion Milestone)",
    },
    {
      title: "Keploy API Fellowship Program",
    },
  ],
};

const projects = [
  {
    name: "PingChat",
    description:
      "A MERN full-stack real-time 1:1 chat app that features live messaging and typing indicators.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "Socket-io", color: "pink-text-gradient" },
    ],
    image: PingChat,
    source_code_link: "https://github.com/Uddipta7/pingchat-realtime",
  },
  {
    name: "VirtualAssistant",
    description:
      "A smart virtual assistant built with MERN & Gemini API. Always listening. Always helping. Voice, text, and action-ready.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: virtualAssistant,
    source_code_link: "https://github.com/Uddipta7/virtualAssistant",
  },
  {
    name: "NutriNova",
    description:
      "A smart Streamlit app for nutrition tracking, exercise logging, meal planning, and real-time health advice.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Plotly", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
    ],
    image: Nutrinova,
    source_code_link: "https://github.com/Uddipta7/NutriNova",
  },
  {
    name: "MovieMuse",
    description:
      "A content-based movie recommender system built using Streamlit and TMDb API.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NumPy", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
    ],
    image: movieRecommenderSystem,
    source_code_link: "https://github.com/Uddipta7/Movie-Recommender-System",
  },
  {
    name: "ClimateTracker",
    description:
      "A web application that tracks climate change impacts using real-time and historical data.",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "Emailjs", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: ClimateDashboard,
    source_code_link: "https://github.com/Uddipta7/ClimateTracker",
  },
  {
    name: "FlowCanvas",
    description:
      "A drag-and-drop visual editor that allows users to place and connect blocks on a canvas",
    tags: [
      { name: "Reactjs", color: "blue-text-gradient" },
      { name: "CanvasUi", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: flowCanvas,
    source_code_link: "https://github.com/Uddipta7/FlowCanvas",
  },
];

export { services, technologies, experiences, projects, learningJourney };
