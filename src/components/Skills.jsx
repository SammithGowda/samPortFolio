import React from "react";

const Skills = () => {
  const skills = ["React.js", "Node.js", "Python", "GIS Mapping", "Tailwind CSS", "MongoDB"];

  return (
    <section id="skills" className="py-16 px-4 md:py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
