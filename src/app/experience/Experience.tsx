"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  icon: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    date: "Jan 2023 - Present",
    description:
      "Worked on various projects, developed responsive web applications, and optimized user experience.",
    icon: "fa6-solid:briefcase",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Studio",
    date: "Jun 2021 - Dec 2022",
    description:
      "Designed user-friendly interfaces and worked closely with developers to implement the designs.",
    icon: "fa6-solid:palette",
  },
  {
    title: "Freelancer",
    company: "Self-employed",
    date: "Jan 2020 - May 2021",
    description:
      "Provided freelance services in web development and design, working with a variety of clients.",
    icon: "fa6-solid:laptop-code",
  },
  {
    title: "Project Manager",
    company: "Global Corp",
    date: "Jul 2018 - Dec 2019",
    description:
      "Managed multiple projects simultaneously, leading cross-functional teams to deliver results on time.",
    icon: "fa6-solid:file",
  },
  {
    title: "Intern",
    company: "Start-Up Inc.",
    date: "Jun 2017 - Jun 2018",
    description:
      "Assisted with various tasks and gained hands-on experience in a dynamic startup environment.",
    icon: "fa6-solid:user-graduate",
  },
];

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <section id={id} className="min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Experience
        </h2>
        <div className="relative flex flex-col items-center before:content-[''] before:absolute before:w-1 before:h-full before:bg-blue-500 before:left-1/2 before:transform before:-translate-x-1/2">
          {visibleExperiences.map((item, index) => (
            <div
              key={index}
              className={`mb-8 w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full md:w-6/12 px-4">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md relative">
                  <div className="flex items-center mb-2">
                    <Icon
                      icon={item.icon}
                      className="text-blue-500"
                      width="24"
                      height="24"
                    />
                    <h3 className="text-lg font-semibold ml-2 text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                  <h4 className="text-gray-600">{item.company}</h4>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <span
                    className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-blue-500 border-2 border-white ${
                      index % 2 === 0 ? "-right-3" : "-left-3"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
