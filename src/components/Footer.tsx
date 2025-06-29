import React from 'react';
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact" className=" py-10">
      <div className="text-center text-white mb-4 ">
        <h1 className="text-2xl font-semibold">Contact</h1>
      </div>
      <div className="flex justify-center gap-6 text-white text-3xl">
        <a
          href="https://github.com/SlmAzr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:slamazr@example.com"
          className="hover:text-gray-400 transition"
        >
          <CiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/slamazr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <CiLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Footer;
