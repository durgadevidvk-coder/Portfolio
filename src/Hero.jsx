
import profile from "./assets/Images/dd-image.jpeg";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f5f5f5] flex items-center pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-purple-600 text-2xl font-semibold mb-4">
            HELLO, I'M
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Durga <span className="text-purple-600">Devi</span>
          </h1>

          <h2 className="text-4xl font-semibold mt-6 text-gray-800">
            Frontend Developer
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">
            I build responsive and user-friendly web applications
            using React JS and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10 flex-wrap">
<a
  href="/DURGA_DEVI.pdf"
  download
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition inline-block"
>
  Download CV
</a>

<a
  href="#projects"
  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition inline-block"
>
  View Projects
</a>
            
            

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-12">

            <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600 text-2xl cursor-pointer hover:scale-110 transition">
              <i className="ri-linkedin-fill"></i>
            </div>

            <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600 text-2xl cursor-pointer hover:scale-110 transition">
              <i className="ri-github-fill"></i>
            </div>

            <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600 text-2xl cursor-pointer hover:scale-110 transition">
              <i className="ri-mail-fill"></i>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Background Splash */}
          <div className="absolute w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl opacity-40"></div>

          {/* Decorative Shape */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Durga Devi"
            className="relative w-[450px] md:w-[500px] object-cover rounded-3xl drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
