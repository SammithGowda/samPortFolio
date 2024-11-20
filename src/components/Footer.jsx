import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          © 2024 - Template designed & developed by{" "}
          <span className="text-white font-bold">Sammith Gowda</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
