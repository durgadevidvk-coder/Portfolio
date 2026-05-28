

import profile from "./assets/Images/dd image.jpeg";
import { FaUsers, FaProjectDiagram, FaCoffee } from "react-icons/fa";


function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Background Blur */}
            <div className="absolute inset-0 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Durga Devi"
              className="relative w-[380px] h-[380px] object-cover rounded-full border-8 border-white shadow-2xl"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <p className="text-purple-600 text-2xl font-semibold mb-4">
            ABOUT ME
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Who Am I?
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-8 mb-6">
            I am a passionate Frontend Developer skilled in creating
            modern, responsive, and user-friendly web applications
            using React JS and Tailwind CSS.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-12">
            I enjoy transforming ideas into interactive websites and
            continuously learning new technologies to improve my
            development skills and create attractive digital experiences.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Happy Customers */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

              <div className="flex justify-center mb-4">
                <FaUsers className="text-5xl text-purple-600" />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                25+
              </h2>

              <p className="text-gray-600 text-lg">
                Happy Customers
              </p>

            </div>

            {/* Projects */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

              <div className="flex justify-center mb-4">
                <FaProjectDiagram className="text-5xl text-purple-600" />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                40+
              </h2>

              <p className="text-gray-600 text-lg">
                Total Projects
              </p>

            </div>

            {/* Coffee */}
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

              <div className="flex justify-center mb-4">
                <FaCoffee className="text-5xl text-purple-600" />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                100+
              </h2>

              <p className="text-gray-600 text-lg">
                Cups of Coffee
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
