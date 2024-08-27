import { ExperienceItem } from "../types/types";

export const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Team Lead",
    company: "Ekspar",
    date: "Nov 2023 - Jul 2024",
    description: `As a Frontend Team Lead, I led the development of responsive and high-performance user interfaces, 
    ensuring seamless integration with complex data models. I guided teams in delivering technically robust solutions on time, 
    applying Agile methodologies to optimize workflows. My work involved managing frontend architecture, improving code quality, 
    and enhancing user experience across multiple challenging projects.`,
    technology:
      "React.js - Typescript - Next.js - Vite - React Router - Redux - SWR - SASS - TailwindCSS - HTML - CSS - Javascript - Node.js - npm - Swagger - Git - VS Code - Azure Devops",
    logo: "/img/ekspar.jpg",
  },
  {
    title: "Frontend Developer",
    company: "Hogarth",
    date: "Aug 2022 - Oct 2023",
    description: `As a Frontend Developer in the advertising industry, I specialized in developing dynamic and attention-grabbing web 
      interfaces to effectively present advertising campaigns. I designed and built multilingual web applications that catered 
      to different languages and cultures, ensuring compliance with localization requirements. My role involved creating high-performance 
      solutions and integrating them with various advertising platforms and tools to deliver seamless user experiences. Additionally, 
      I focused on optimizing frontend performance, enhancing cross-browser compatibility, and presenting creative content effectively. 
      I utilized Agile methodologies to streamline development processes and deliver innovative features that met both client expectations 
      and industry standards.`,
    technology:
      "HTML - CSS - Javascript - Yarn - SVN - Python - Docker - BBEdit - Xcode - VS Code - Radar",
    logo: "/img/hogarth.jpg",
  },
  {
    title: "Frontend Developer",
    company: "T-Soft",
    date: "May 2018 - Aug 2022",
    description: `As a Frontend Developer in the e-commerce industry, I focused on creating user-friendly and visually appealing web interfaces 
    to enhance the online shopping experience. I developed and implemented high-performance solutions for critical areas such as product pages, 
    shopping carts, and checkout processes, ensuring smooth and responsive interactions across various devices and platforms. My role involved 
    coding and developing e-commerce websites, optimizing frontend performance, and fixing bugs to ensure usability. I also collaborated with 
    cross-functional teams to integrate with backend systems and third-party services, aiming to drive user engagement and conversion rates 
    through innovative features that met market demands and business goals.`,
    technology:
      "Vue.js - Angular - Vue Router - Vuex - SASS - Bootstrap - HTML - CSS - Javascript - Jquery - PHP - MySQL - Node.js - npm - Figma - Sketch - Adobe Xd - Zeplin - VS Code - Trello",
    logo: "/img/tsoft.jpg",
  },
  {
    title: "Software Developer",
    company: "Model",
    date: "Jun 2015 - Aug 2015",
    description: `As a Software Developer in the ERP industry, I specialized in modular design and data integration within ERP systems to 
    streamline business processes and enhance operational efficiency. I developed customized software solutions tailored to meet the unique 
    needs of businesses, optimizing workflows and improving overall system performance. My role involved designing and implementing scalable 
    modules, integrating diverse data sources, and ensuring seamless interaction between various components of the ERP system to support 
    business operations effectively.`,
    technology: "C - MySQL - SublimeText",
    logo: "/img/model.jpg",
  },
  {
    title: "Intern",
    company: "T-Soft",
    date: "Jun 2014 - Sep 2014",
    description: `As a Intern in the e-commerce industry, I helped develop user-friendly web interfaces and assist with maintaining product 
    pages and checkout processes. My tasks included coding, testing, and debugging frontend components, as well as supporting integration with 
    backend systems. This role provided me with valuable experience in enhancing web performance and usability.`,
    technology: "HTML - CSS - PHP - MySQL - NotePad++ - AdobePhotoshop",
    logo: "/img/tsoft.jpg",
  },
];

export const technologyIconMapping: { [key: string]: string } = {
  "React.js": "logos:react",
  "Vue.js": "logos:vue",
  "Angular": "logos:angular-icon",
  "Typescript": "logos:typescript-icon",
  "Next.js": "logos:nextjs-icon",
  "Vite": "logos:vitejs",
  "React Router": "logos:react-router",
  "Vue Router": "logos:vue",
  "Redux": "logos:redux",
  "Vuex": "logos:vue",
  "SWR": "logos:swr",
  "SASS": "logos:sass",
  "Bootstrap": "logos:bootstrap",
  "TailwindCSS": "logos:tailwindcss-icon",
  "HTML": "logos:html-5",
  "CSS": "logos:css-3",
  "Javascript": "logos:javascript",
  "Jquery": "logos:jquery",
  "Node.js": "logos:nodejs-icon",
  "Python": "logos:python",
  "PHP": "logos:php",
  "C": "logos:c",
  "MySQL": "logos:mysql",
  "npm": "logos:npm-icon",
  "Yarn": "logos:yarn",
  "SVN": "logos:subversion",
  "Git": "logos:git-icon",
  "Docker": "logos:docker-icon",
  "Swagger": "logos:swagger",
  "Azure Devops": "cib:azure-devops",
  "Radar": "logos:apple-app-store",
  "Trello": "logos:trello",
  "Figma": "logos:figma",
  "Sketch": "logos:sketch",
  "Adobe Xd": "logos:adobe-xd",
  "Zeplin": "logos:zeplin",
  "VS Code": "logos:visual-studio-code",
  "Xcode": "logos:xcode",
  "BBEdit": "logos:apple-app-store",
  "SublimeText": "logos:sublimetext-icon",
  "NotePad++": "simple-icons:notepadplusplus",
  "AdobePhotoshop": "logos:adobe-photoshop",
};
