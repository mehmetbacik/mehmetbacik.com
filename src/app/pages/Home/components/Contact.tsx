
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
      <div id="headline">
        <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
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
                className="text-gray-700 hover:text-gray-800"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  