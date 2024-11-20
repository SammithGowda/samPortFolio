import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "GPS Tracker",
      description: "Real-time tracking system using React and Node.js with GIS integration.",
      tools: ["React", "Node.js", "Leaflet", "MongoDB"],
    },
    {
      title: "Weather App",
      description: "Weather tracking app built with React Native and MongoDB.",
      tools: ["React Native", "Expo", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
