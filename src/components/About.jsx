import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white px-6 md:px-16 pt-24 md:pt-32"
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Left Section: About Me */}
        <div className="md:w-2/3 text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed">
            Full-stack developer, crafting{" "}
            <span className="text-blue-600">experiences</span> that{" "}
            <span className="text-blue-600">inspire</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Hello! I’m <span className="font-semibold">Sammith Gowda</span>, a
            dedicated Full Stack Developer and GIS Specialist with a passion for
            crafting innovative, user-friendly applications. With over three
            years of experience, I excel in building web and desktop solutions
            using <span className="font-semibold">React.js, Node.js,</span> and{" "}
            <span className="font-semibold">Python</span>, along with a deep
            understanding of geospatial technologies like{" "}
            <span className="font-semibold">ArcGIS</span> and open-source mapping
            tools.
            <br />
            <br />
            I thrive on solving complex problems by integrating real-time data
            processing, hardware systems, and intuitive user interfaces.
            Continuously exploring emerging technologies such as{" "}
            <span className="font-semibold">AWS</span> and{" "}
            <span className="font-semibold">Docker</span>, I aim to build
            scalable and impactful solutions that deliver results.
            <br />
            <br />
            Let’s collaborate and turn ideas into reality!
          </p>
          {/* Resume Download Button */}
          <a
            href="/Resume.pdf" // Replace with your resume file URL
            download="Sammith_Gowda_Resume.pdf"
            className="inline-block border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-md bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section: Photo */}
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src="/sam.jpg" // Replace with your photo path
            alt="Sammith Gowda"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
