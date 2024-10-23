"use client";

import { useState } from "react";
import { projects } from "./projectsData"; // Import the project data
import Image from "next/image";

// Define the structure of the props for each project card
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the description

  return (
    <div
      className="relative bg-white shadow-md rounded-md overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg"
      onClick={() => setIsOpen(!isOpen)} // Toggle the description on click
    >
      {/* Heading Outside the Image */}
      <h3 className="text-2xl md:text-2xl font-bold text-blue-600 mb-4">
        {title}
      </h3>

      {/* Image Section */}
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          isOpen ? "transform translate-x-10 opacity-0" : "opacity-100"
        }`}
      >
        {/* <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover cursor-pointer"
        /> */}

        <Image
          src={image}
          alt={title}
          width={500} 
          height={300} 
          className="w-full h-48 object-cover cursor-pointer"
        />
      </div>

      {/* Description Section */}
      <div
        className={`absolute inset-0 bg-white p-4 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 z-10" : "opacity-0"
        }`}
      >
        <p className="text-gray-600 mt-14">{description}</p>
        <button
          className="mt-4 text-blue-600 underline"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Projects Component
export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 p-8 md:p-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
