


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-600">
          Durga Devi
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-purple-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;