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

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
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
        <div className="flex flex-col gap-6">
          {visibleExperiences.map((item, index) => (
            <div
              key={index}
              className="w-full card-area cursor-pointer rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 card-area"
              onClick={() => togglePopup(index)}
            >
              <div className="p-4 md:p-6 relative">
                <div className="flex items-center gap-6 mb-2">
                  <Image
                    src={item.logo}
                    alt={`${item.company} Logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-600">{item.company}</h4>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    <p className="text-gray-600">
                      {truncateText(item.description, 100)}{" "}
                    </p>
                    <ul className="mt-2">
                      {(() => {
                        const technologies = item.technology.split(" - ");
                        const visibleTechnologies = technologies.slice(0, 2);
                        const remainingTechnologies = technologies.length - 2;

                        return (
                          <li className="flex items-center mb-2">
                            {visibleTechnologies.map((tech, i) => (
                              <span key={i} className="text-gray-600">
                                {tech}
                                {i < visibleTechnologies.length - 1 && ", "}
                              </span>
                            ))}
                            {remainingTechnologies > 0 && (
                              <span className="text-gray-600 ml-2">
                                and +{remainingTechnologies} skills
                              </span>
                            )}
                          </li>
                        );
                      })()}
                    </ul>
                  </div>
                </div>

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
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
                          {item.technology.split(" - ").map((tech, i) => (
                            <span key={i} className="flex items-center mb-2">
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
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
