import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`w-full flex sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-[#000000a1] shadow-neon" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex space-x-8">
            <a
              href="#home"
              className="text-white neon-glow-white hover:text-[#fff9f9] hover:neon-glow-white transition"
            >
              Accueil
            </a>
            <a
              href="#skills"
              className="text-white neon-glow-white hover:text-[#fff9f9] hover:neon-glow-white transition"
            >
              Compétence
            </a>
            <a
              href="#portfolio"
              className="text-white neon-glow-white hover:text-[#fff9f9] hover:neon-glow-white transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white neon-glow-white hover:text-[#fff9f9] hover:neon-glow-white transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
