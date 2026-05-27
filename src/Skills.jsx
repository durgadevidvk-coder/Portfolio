import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

function EducationSkills() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6" id="education">

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold text-purple-600">
            Education & Skills
          </h1>

         

        </div>

        <hr className="border-gray-300 mb-20" />

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - EDUCATION */}
          <div className="space-y-14">

            {/* M.E */}
            <div className="flex gap-6">

              <div className="mt-3">
                <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Master of Engineering  2020 - 2022
                </h2>

                <p className="text-gray-600 text-xl leading-10">
                  Completed M.E Embedded System Technologies with 85%
                  at Fatima Michael College of Engineering and Technology
                  under Anna University.
                </p>
              </div>

            </div>

            {/* B.E */}
            <div className="flex gap-6">

              <div className="mt-3">
                <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Bachelor of Engineering  2013 - 2017
                </h2>

                <p className="text-gray-600 text-xl leading-10">
                  Completed Engineering degree with strong
                  technical knowledge and problem-solving skills.
                </p>
              </div>

            </div>

            {/* HSC */}
            <div className="flex gap-6">

              <div className="mt-3">
                <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Higher Secondary - 2013
                </h2>

                <p className="text-gray-600 text-xl leading-10">
                  Successfully completed Higher Secondary education
                  with good academic performance.
                </p>
              </div>

            </div>

          </div>

{/* RIGHT SIDE - SKILLS */}
<div className="space-y-5">

  {/* HTML */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-lg transition">

    <div className="flex items-center gap-4">

      <FaHtml5 className="text-5xl text-orange-500" />

      <div>
        <h2 className="text-xl font-semibold">
          HTML
        </h2>

        <p className="text-gray-500 text-sm">
          Frontend Markup Language
        </p>
      </div>

    </div>

    <div className="text-right">

      <p className="text-lg font-semibold text-gray-700 mb-2">
        95%
      </p>

      <div className="flex gap-1">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
      </div>

    </div>

  </div>

  {/* CSS */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-lg transition">

    <div className="flex items-center gap-4">

      <FaCss3Alt className="text-5xl text-blue-500" />

      <div>
        <h2 className="text-xl font-semibold">
          CSS
        </h2>

        <p className="text-gray-500 text-sm">
          Styling & Responsive Design
        </p>
      </div>

    </div>

    <div className="text-right">

      <p className="text-lg font-semibold text-gray-700 mb-2">
        90%
      </p>

      <div className="flex gap-1">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>

    </div>

  </div>

  {/* JavaScript */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-lg transition">

    <div className="flex items-center gap-4">

      <FaJs className="text-5xl text-yellow-400" />

      <div>
        <h2 className="text-xl font-semibold">
          JavaScript
        </h2>

        <p className="text-gray-500 text-sm">
          Dynamic Web Development
        </p>
      </div>

    </div>

    <div className="text-right">

      <p className="text-lg font-semibold text-gray-700 mb-2">
        85%
      </p>

      <div className="flex gap-1">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>

    </div>

  </div>

  {/* React */}
  <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-lg transition">

    <div className="flex items-center gap-4">

      <FaReact className="text-5xl text-cyan-500" />

      <div>
        <h2 className="text-xl font-semibold">
          React JS
        </h2>

        <p className="text-gray-500 text-sm">
          Frontend Library
        </p>
      </div>

    </div>

    <div className="text-right">

      <p className="text-lg font-semibold text-gray-700 mb-2">
        85%
      </p>

      <div className="flex gap-1">
        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>

    </div>

  </div>

</div>













        
          

        </div>

      </div>

    </section>
  );
}

export default EducationSkills;