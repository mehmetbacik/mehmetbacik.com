import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="my-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <FaBriefcase className="text-4xl text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Job Title
              </h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Date Range</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <FaBriefcase className="text-4xl text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Job Title
              </h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Date Range</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <FaBriefcase className="text-4xl text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Job Title
              </h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Date Range</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
