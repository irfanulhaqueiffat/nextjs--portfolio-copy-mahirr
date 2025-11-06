'use client'; 
import React from "react";
import { href } from "react-router";
import Image1 from "../Images/Screenshot 2025-11-06 084936.png";
import Image from "next/image";
import nexton from "../Images/nexton.png"
import Canvix from "../Images/canvix.png"
import tree from "../Images/tree plant.png"
import furniture from "../Images/furniture.png"
import weather from "../Images/weather.png"

// Your Project Data
const projects = [
  {
    image:furniture,
    title: "HTML/CSS Project: Furniture shop Responsive Landing Page",
    stack: "HTML, CSS",
    link: "https://irfanulhaqueiffat.github.io/project3-furniture-shop/", // Add project link here
  },
    {
      image:tree,
    title: "HTML/CSS Project: Tree plant shop Responsive Landing Page",
    stack: "HTML, CSS",
    link: "https://irfanulhaqueiffat.github.io/project-1-tree-plant-shop/", // Add project link here
  },
    {
      image:weather,
    title: "HTML/CSS/javascript Project:  weather app",
    stack: "HTML, CSS",
    link: "https://irfanulhaqueiffat.github.io/project-4-weather-forcast-with-js/", // Add project link here
  },
  {image:Canvix,
    title: "React JS Project: canvix landing page",
    stack: "React.js, Hooks",
    link: "https://canvix-update-wkqx.vercel.app/",
  },
  {
    image:nexton,
    title: "React JS Project: Nexton E-commerce UI Demo",
    stack: "React.js, Styled Components",
    link: "https://nexton-update-rnlh.vercel.app/",
  },
  {
    image: Image1,
    title: "Next.js Project: authentication system",
    stack: "Next.js, SSR",
    link: "https://login-page-ten-alpha.vercel.app",
  },
  {
    image:"",
    title: "Admin Dashboard / Node.js Project",
    stack: "Node.js, Dashboard UI",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    // Section background is bg-gray-950
    <section
      id="Portfolio"
      className=" mt-30 text-white mb-30 font-sans"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-500 ">
          My Projects
        </h2>       

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Each Project Card (Div) background is also bg-gray-950
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block" // Makes the entire card clickable
            >

              <div
                className="p-6 rounded-xl shadow-2xl transition-all duration-300 transform 
                           bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20"
              >
                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                  {project.title}
                </h3>
                <div>
                  {/* Project Image */}
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title} />
                  )}
                </div>

                {/* Technology Stack */}
                <p className="text-sm font-medium text-gray-400 mb-4">
                  Technology:{" "}
                  <span className="text-amber-500">{project.stack}</span>
                </p>

                {/* Simple Description */}
                <p className="text-sm text-gray-500">
                  This project focuses on clean architecture and solid user
                  experience.
                </p>

                {/* 'View Project' Tag */}
                <div className="mt-4 text-sm text-amber-500 font-medium">
                  View Project →
                </div>
              </div>
            </a>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Portfolio;
