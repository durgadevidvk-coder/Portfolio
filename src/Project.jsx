






import {
  FaGithub,
  FaCode,
} from "react-icons/fa";

import project1 from "./assets/Images/headphones 3.png";
import project2 from "./assets/Images/outdoor toys.png";
import project3 from "./assets/Images/vegan special 1.png";


function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold text-purple-600">
            My Projects
          </h1>

          

        </div>

        <hr className="border-gray-300 mb-20" />

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* PROJECT 1 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img   src="./src/assets/Images/headphones 3.png"
                
                alt="Portfolio Website"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* HOVER ICONS */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href=" https://durgadevidvk-coder.github.io/Electronics/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/Electronics.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                Electronics Site
              </h2>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img
                src="./src/assets/Images/outdoor toys.png"
                alt="Billing Software"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href="https://durgadevidvk-coder.github.io/toys/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/toys.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                Toys World
              </h2>

            </div>

          </div>

          {/* PROJECT 3 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img
                src="./src/assets/Images/vegan special 1.png"
                alt="E-Commerce Website"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href="https://durgadevidvk-coder.github.io/my-kitchen/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/my-kitchen.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
            My Kitchen
              </h2>

            </div>

          </div>

          {/* PROJECT 4 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img
                src="./src/assets/Images/shopping (20).webp"
                alt="Food Delivery App"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href="https://durgadevidvk-coder.github.io/cosmetics/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/cosmetics.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                Cosmetics
              </h2>

            </div>

          </div>

          {/* PROJECT 5 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img
                 src="./src/assets/Images/aari5.jpeg"
                alt="Weather App"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href=" https://durgadevidvk-coder.github.io/Aari/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/Aari.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                Aari 
              </h2>

            </div>

          </div>

          {/* PROJECT 6 */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            <div className="relative overflow-hidden">

              <img
                src="./src/assets/Images/serviceimg2.png"
                alt="Movie Booking App"
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-start pl-6 gap-4">

                <a
                  href=" https://durgadevidvk-coder.github.io/construction/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaGithub className="text-2xl" />
                </a>

                <a
                  href="https://github.com/durgadevidvk-coder/construction.git"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  <FaCode className="text-2xl" />
                </a>

              </div>

            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                Construction
              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;