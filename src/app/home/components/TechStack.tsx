import React from "react";
import {
  Frontend,
  Backend,
  Others,
  TechStackItem,
} from "../../../data/techStackData";
import { Icon } from "@iconify/react";

const TechStack: React.FC = () => {
  const renderTechStack = (techStack: TechStackItem[]) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl">
              <Icon icon={tech.icon} />
            </div>
            <p className="mt-2 text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Frontend</h2>
      {renderTechStack(Frontend)}

      <h2 className="text-2xl font-bold mb-4 mt-8">Backend</h2>
      {renderTechStack(Backend)}

      <h2 className="text-2xl font-bold mb-4 mt-8">Others</h2>
      {renderTechStack(Others)}
    </div>
  );
};

export default TechStack;
