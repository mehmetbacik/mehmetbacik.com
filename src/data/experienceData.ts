import { ExperienceItem } from "../types/types";

export const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    date: "Jan 2023 - Present",
    description:
      "Worked on various projects, developed responsive web applications, and optimized user experience.",
    technology: "React.js - Vue.js",
    logo: "/img/ekspar.jpg",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    date: "Jun 2021 - Dec 2022",
    description:
      "Designed user-friendly interfaces and worked closely with developers to implement the designs.",
    technology: "Figma - Sketch",
    logo: "/img/hogarth.jpg",
  },
  {
    title: "Freelancer",
    company: "Self-employed",
    date: "Jan 2020 - May 2021",
    description:
      "Provided freelance services in web development and design, working with a variety of clients.",
    technology: "React.js - Tailwind CSS",
    logo: "/img/tsoft.jpg",
  },
  {
    title: "Project Manager",
    company: "Global Corp",
    date: "Jul 2018 - Dec 2019",
    description:
      "Managed multiple projects simultaneously, leading cross-functional teams to deliver results on time.",
    technology: "Jira - Confluence",
    logo: "/img/model.jpg",
  },
  {
    title: "Intern",
    company: "Start-Up Inc.",
    date: "Jun 2017 - Jun 2018",
    description:
      "Assisted with various tasks and gained hands-on experience in a dynamic startup environment.",
    technology: "HTML - CSS",
    logo: "/img/tsoft.jpg",
  },
];

export const technologyIconMapping: { [key: string]: string } = {
  "React.js": "logos:react",
  "Vue.js": "logos:vue",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Figma: "logos:figma",
  Sketch: "logos:sketch",
  Jira: "logos:jira",
  Confluence: "logos:confluence",
  HTML: "fa-brands:html5",
  CSS: "fa-brands:css3",
};
