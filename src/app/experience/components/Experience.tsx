import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <Image
                src="/library/images/companies/ekspar.jpg"
                alt="EksparLogo"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Team Lead
              </h3>
              <p className="text-gray-600 mb-2">Ekspar</p>
              <p className="text-gray-700 mb-4">Nov 2023 - Jul 2024</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <Image
                src="/library/images/companies/hogarth.jpg"
                alt="HogarthLogo"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Developer
              </h3>
              <p className="text-gray-600 mb-2">Hogarth</p>
              <p className="text-gray-700 mb-4">Aug 2022 - Oct 2023</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <Image
                src="/library/images/companies/tsoft.jpg"
                alt="TsoftLogo"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Developer
              </h3>
              <p className="text-gray-600 mb-2">T-Soft</p>
              <p className="text-gray-700 mb-4">May 2018 - Aug 2022</p>
              <p className="text-gray-700">
                Description of responsibilities and achievements in this
                position.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="mr-4">
              <Image
                src="/library/images/companies/model.jpg"
                alt="ModelLogo"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Software Developer
              </h3>
              <p className="text-gray-600 mb-2">Model</p>
              <p className="text-gray-700 mb-4">Jun 2015 - Aug 2015</p>
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
