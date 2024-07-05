import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
        <div className="flex items-center space-x-4 mb-8">
          <a
            href="mailto:example@example.com"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="tel:+1234567890"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaPhone className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
