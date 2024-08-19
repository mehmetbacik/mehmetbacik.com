"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/Project.module.scss";
import { projectsData } from "@/data/projectData";

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<string>("web");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tabs = Object.keys(projectsData);
  const allTags = Array.from(
    new Set(projectsData[activeTab].flatMap((project) => project.tags))
  );

  const handleTagFilter = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredProjects = projectsData[activeTab].filter((project) =>
    selectedTags.length
      ? project.tags.some((tag) => selectedTags.includes(tag))
      : true
  );

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.project}`}>
      <div className={styles.project_content}>
        <div className={styles.project_headline}>
          <h1 className={styles.project_bigtitle}>Project</h1>
          <h2 className={styles.project_title}>Project</h2>
        </div>
        <div className="mb-4 w-full">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedTags([]);
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="mb-4 flex flex-wrap gap-2 mt-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 border rounded-md text-sm ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 border-blue-500"
                }`}
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {project.description}
                  </p>
                  <div className="mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 mr-2 text-xs font-semibold text-white bg-blue-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
