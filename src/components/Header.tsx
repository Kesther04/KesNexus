import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import lightLogo from "../assets/Images/logo_light.png";
import darkLogo from "../assets/Images/logo_dark.png";
import HamburgerMenu from "./HamburgerMenu";
import {motion} from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  let projectDir: string[] = location.pathname.split("/");

  const navs = ["Home", "About", "Services", "Projects", "Contact"];

  // Handle header shadow on scroll
  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 100);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // to set active section based on scroll position
  useEffect(() => {
      const sections = document.querySelectorAll("section[id]");
      if (!sections.length) return;

      const handleScroll = () => {
          let current = activeSection;

          sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              current = section.id;
          }
          });

          setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // run once on mount

      return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Close mobile menu on resize if width > md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll to section
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) setOpen(false); // close mobile menu
  };

  //header styling alloter
  function headerStyle() {
    let styles:string = "";
    

    if (scrolled) {
      styles = "shadow-md";
    }

    // if (!scrolled) {
    //   styles = "text-white";
    // }

    
    // if (open) {
    //   styles = "text-black dark:text-white ";
    // }


    if (projectDir[1] === "projects") {
      styles = "shadow-md";
    }

    return styles;
  }

  // to get the current logo based on the theme
  const currentLogo = theme === "dark" ? darkLogo : lightLogo;

  return (
    <motion.header
      className={`flex items-center justify-between space-x-4 py-4 px-2 md:px-8 xl:px-32 fixed w-full  z-50 bg-white/80   dark:bg-black/80 text-black dark:text-white backdrop-blur-sm
        ${headerStyle()}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <div className="cursor-pointer flex items-center z-50 ">
        <Link to="/" className="flex items-center justify-center ">
          <img src={currentLogo} alt="Logo" className="w-28 absolute top-5 left-5 md:left-10 lg:left-32" />
        </Link>
      </div>

      {/* Navigation */}
      <ul className={`nav ${open ? "open" : ""}`}>
        {projectDir[1] === "projects" ? (
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        ) : (
          navs.map((nav) => (
            <li key={nav}>
              <a
                href={`/#${nav.toLowerCase()}`}
                className={activeSection === nav.toLowerCase() ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(nav.toLowerCase());
                }}
              >
                {nav}
              </a>
            </li>
          ))
        )}
      </ul>

      {/* Theme toggle + Hamburger */}
      <div className="flex items-center z-50">
        {theme === "dark" && <Sun className="themeBtn" onClick={toggleTheme} />}
        {theme === "light" && <Moon className="themeBtn" onClick={toggleTheme} />}
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>
    </motion.header>
  );
}
