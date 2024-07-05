import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>Image Area</div>
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar dolor sit amet sapien accumsan, vitae consectetur purus
                tempus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Nunc at nibh a magna pretium
                blandit. Mauris eget eros eget metus ultrices commodo.
              </p>
              <p className="text-lg text-gray-700">
                Fusce auctor leo eget sapien tincidunt, in convallis nunc
                feugiat. Vivamus dapibus diam id mi euismod, eget pulvinar nibh
                fermentum. Aliquam feugiat efficitur libero, id vestibulum elit
                blandit nec. Phasellus sed ante ac enim commodo malesuada. Nulla
                facilisi.
              </p>
            </div>
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                Download CV
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg text-gray-700">
                Email: example@example.com
              </p>
              <p className="text-lg text-gray-700">Phone: +1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
