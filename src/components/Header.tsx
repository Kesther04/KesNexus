import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import KesnexusLogo from "../assets/Logo";


// This is the header component that will be used across the application
export default function Header () { 
    const [scrolled, setScrolled] = useState(false);
    const {theme, toggleTheme} = useTheme();

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

    
    
    return (
        <header className={`flex items-center justify-between space-x-4 p-4  fixed bg-white/80 dark:bg-black/80 w-full backdrop-blur-sm z-20  ${scrolled ? "shadow-md" : ""}`}>

            
            {/* logo for the header */}
            <div className="cursor-pointer flex items-center">
                <Link to="/" className="relative flex items-center justify-center  dark:text-white"> 
                    <KesnexusLogo className="relative w-16 h-16 text-primary dark:text-primary-dark"/> 
                    <small className="font-medium text-xl absolute left-11">
                        NEXUS 
                        <span className="text-primary dark:text-primary-dark text-3xl">.</span>
                    </small> 
                </Link>
            </div>

            {/* navigation links for the header */}
            <ul className="nav hidden opacity-0 md:opacity-100 md:flex space-x-8 font-medium">


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


            {/* theme toggler */}
            <div className="flex items-center">
                {theme === "dark" && <Sun className="themeBtn" onClick={toggleTheme} />}
                {theme === "light" && <Moon className="themeBtn" onClick={toggleTheme} />}
                
            </div>
        </header>
    )
}