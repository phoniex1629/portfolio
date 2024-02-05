import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  drdo,
  threejs,
  cpp,
  python,
  sql,
  aws,
  chatApp,
  foodReciepe,
  salPredWebApp,
  wellnessDiced,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Database Manager",
    icon: backend,
  },
  {
    title: "Cloud Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Wellness Diced",
    icon: wellnessDiced,
    iconBg: "#000000",
    date: "April 2021 - May 2021",
    points: [
      "Designing and Developing the Web Page using HTML, CSS and JavaScript",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Intern",
    company_name: "DRDO",
    icon: drdo,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Research and Learn about Cryptography, espicially Asymmetric Cryptography and Privacy Preserving Techniques",
      "Research about Domingo Ferrer Scheme and find a way to implement it",
      "Implement Privacy Preserving Technique using Domingo Ferrer Scheme in C++",
    ],
  },
];

const projects = [
  {
    name: "Food Reciepe",
    description:
      "This Web-based platform allows users to search, new and different healthy reciepes. Users can search by entering the main element they want in their dishes, and many tasty reciepes will be listed down from which you can mark your favourites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodReciepe,
    source_code_link: "https://github.com/phoniex1629",
  },
  {
    name: "Chat Application",
    description:
      " This Web Application allows different users, or group of users to connect with each other and share their opinions with each other.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "chakra.ui",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/phoniex1629",
  },
  {
    name: "Salary Prediction Web Application",
    description:
      "This Web Appication is Machine Learning based Application which enables users to analyze their self worth in current market conditions and pedict what their salaries.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: salPredWebApp,
    source_code_link: "https://github.com/phoniex1629",
  },
];

export { services, technologies, experiences, projects };
