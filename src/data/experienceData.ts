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
    technology: "React.js - Typescript - Next.js - Vite - Redux - SWR - SASS - TailwindCSS - HTML - CSS - Javascript - Node.js - npm - Swagger - Azure Devops",
    logo: "/img/ekspar.jpg",
  },
  {
    title: "Frontend Developer",
    company: "Hogarth",
    date: "Aug 2022 - Oct 2023",
    description:
      "Designed user-friendly interfaces and worked closely with developers to implement the designs.",
    technology: "Figma - Sketch",
    logo: "/img/hogarth.jpg",
  },
  {
    title: "Frontend Developer",
    company: "T-Soft",
    date: "May 2018 - Aug 2022",
    description:
      "Provided freelance services in web development and design, working with a variety of clients.",
    technology: "React.js - Tailwind CSS",
    logo: "/img/tsoft.jpg",
  },
  {
    title: "Software Developer",
    company: "Model",
    date: "Jun 2015 - Aug 2015",
    description:
      "Managed multiple projects simultaneously, leading cross-functional teams to deliver results on time.",
    technology: "Jira - Confluence",
    logo: "/img/model.jpg",
  },
  {
    title: "Intern",
    company: "T-Soft",
    date: "Jun 2014 - Sep 2014",
    description:
      "Assisted with various tasks and gained hands-on experience in a dynamic startup environment.",
    technology: "HTML - CSS",
    logo: "/img/tsoft.jpg",
  },
];

export const technologyIconMapping: { [key: string]: string } = {
  "React.js": "logos:react",
  "Vue.js": "logos:vue",
  "Typescript": "logos:typescript-icon",
  "Next.js": "logos:nextjs-icon",
  "Vite": "logos:vitejs",
  "Redux": "logos:redux",
  "SWR": "logos:swr",
  "SASS": "logos:sass",
  "TailwindCSS": "logos:tailwindcss-icon",
  "HTML": "logos:html-5",
  "CSS": "logos:css-3",
  "Javascript": "logos:javascript",
  "Node.js": "logos:nodejs-icon",
  "npm": "logos:npm-icon",
  "Swagger": "logos:swagger",
  "Azure Devops": "cib:azure-devops",
  Figma: "logos:figma",
  Sketch: "logos:sketch",
  Jira: "logos:jira",
  Confluence: "logos:confluence",
};
