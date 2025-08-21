import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import LogoAttachment from "../assets/LogoAttachment";
import Logo from "../assets/Logo";
import HamburgerMenu from "./HamburgerMenu";


// This is the header component that will be used across the application
export default function Header () { 
    const [scrolled, setScrolled] = useState(false);
    const {theme, toggleTheme} = useTheme();
    const [open, setOpen] = useState(false);

    const location = useLocation();
    let currentView = location.hash;

    let projectDir:string[] = location.pathname.split("/"); // to check for the "projects" path 


    const navs = ["Home","About","Services","Projects","Contact"];

    // to handle when page reaches a certain scrolled position
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // to handle nav display based on page size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize); // to detect when a browser window is resized / changed
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={`flex items-center justify-between space-x-4 py-4 px-2 md:px-20  fixed bg-white/80 dark:bg-black/80 w-full backdrop-blur-sm z-50  ${scrolled ? "shadow-md" : ""}`}>

            
            {/* logo for the header */}
            <div className="relative cursor-pointer flex items-center z-50">
                <Link to="/" className="absolute flex items-center justify-center  dark:text-white"> 
                    <Logo className="w-14 h-14 text-primary dark:text-primary-dark "/> 
                    <LogoAttachment/>
                </Link>
            </div>

            {/* navigation links for the header */}
            <ul className={`nav ${open ? "open" : ""}`}>


                {
                    projectDir[1] === "projects" ? <li> <Link to="/" >Back to Home</Link> </li> :
                    
                    navs.map((nav) => (
                        <li key={nav}>
                            <a href={`/#${nav.toLowerCase()}`} className={currentView === `#${nav.toLowerCase()}` ? "active" : ""} >
                                {nav}
                            </a>
                        </li>
                    ))

                
                
                }

            </ul>


            {/* theme toggler + Hamburger Menu*/}
            <div className="flex items-center z-50">
                {theme === "dark" && <Sun className="themeBtn" onClick={toggleTheme} />}
                {theme === "light" && <Moon className="themeBtn" onClick={toggleTheme} />}               

                <HamburgerMenu open={open} setOpen={setOpen}/>
            </div>


        </header>
    )
}