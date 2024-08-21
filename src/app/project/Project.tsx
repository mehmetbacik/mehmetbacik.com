"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/Project.module.scss";
import { projectsData } from "@/data/projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/swiper.scss";

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

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
    setCurrentPage(1);
  };

  const filteredProjects = projectsData[activeTab].filter((project) =>
    selectedTags.length
      ? project.tags.some((tag) => selectedTags.includes(tag))
      : true
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id={id} className={`container mx-auto px-4 ${styles.project}`}>
      <div className={styles.project_content}>
        <div className={styles.project_headline}>
          <h1 className={styles.project_bigtitle}>Project</h1>
          <h2 className={styles.project_title}>Project</h2>
        </div>
        <div className={styles.project_tab}>
          <div className={styles.project_tab_headline}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.project_tab_title} ${
                  activeTab === tab ? styles.active : styles.inactive
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedTags([]);
                  setCurrentPage(1);
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className={styles.project_tags}>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 3,
                },
                "@0.75": {
                  slidesPerView: 4,
                },
                "@1.00": {
                  slidesPerView: 5,
                },
                "@1.50": {
                  slidesPerView: 12,
                },
              }}
              freeMode={true}
              modules={[Pagination]}
              className="tagSwiper"
            >
              {allTags.map((tag) => (
                <SwiperSlide key={tag}>
                  <button
                    className={`${styles.project_tags_button} ${
                      selectedTags.includes(tag)
                        ? styles.active
                        : styles.inactive
                    }`}
                    onClick={() => handleTagFilter(tag)}
                  >
                    {tag}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg overflow-hidden"
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
                    {project.description.length > 100
                      ? `${project.description.slice(0, 100)}...`
                      : project.description}
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
              </a>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                className={`px-3 py-1 border rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
