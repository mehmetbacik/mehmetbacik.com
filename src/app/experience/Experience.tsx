"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import styles from "./styles/Experience.module.scss";
import { experienceData, technologyIconMapping } from "@/data/experienceData";

export interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );
  const [showAll, setShowAll] = useState(false);

  const togglePopup = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  const visibleExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.experience}`}>
      <div className={styles.experience_content}>
        <div className={styles.experience_headline}>
          <h1 className={styles.experience_bigtitle}>Experience</h1>
          <h2 className={styles.experience_title}>Experience</h2>
        </div>
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
                    <Image
                      src={item.logo}
                      alt={`${item.company} Logo`}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <h3 className="text-lg font-semibold text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                  <h4 className="text-gray-600">{item.company}</h4>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                  <p className="text-gray-500 text-sm mt-3">
                    {item.description}
                  </p>
                  <button
                    onClick={() => togglePopup(index)}
                    className="mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <Icon
                      icon="fa6-solid:info-circle"
                      width="20"
                      height="20"
                      className="mr-2"
                    />
                    Details
                  </button>
                  {selectedExperience === index && (
                    <div
                      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
                      onClick={() => setSelectedExperience(null)}
                    >
                      <div
                        className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-4/12"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                          onClick={() => setSelectedExperience(null)}
                        >
                          <Icon icon="fa6-solid:xmark" width="24" height="24" />
                        </button>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                          {item.title} @ {item.company}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="mt-4">
                          <h4 className="text-gray-700 font-semibold mb-2">
                            Technologies Used:
                          </h4>
                          <ul>
                            {item.technology.split(" - ").map((tech, i) => (
                              <li key={i} className="flex items-center mb-2">
                                <Icon
                                  icon={
                                    technologyIconMapping[tech] ||
                                    "fa-solid:circle"
                                  }
                                  width="18"
                                  height="18"
                                  className="text-blue-500 mr-2"
                                />
                                <span className="text-gray-600">{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
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
