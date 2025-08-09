import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Frame } from "lucide-react";
import { useEffect, useState } from "react";

// This is the header component that will be used across the application
export default function Header () { 
    const [scrolled, setScrolled] = useState(false);
    const [themeBtn, setThemeBtn] = useState("light");
    
    const location = useLocation();
    let currentView = location.hash;

    const navs = ["About","Services","Projects"];

    // to handle when page reaches a certain scrolled position
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex items-center justify-between space-x-4 p-4  fixed bg-white/80 w-full backdrop-blur-sm z-20  ${scrolled ? "shadow-md" : ""}`}>

            
            {/* logo for the header */}
            <div className="cursor-pointer flex items-center">
                <Link to="/"><Frame className="w-8 h-8 " /></Link>
            </div>

            {/* navigation links for the header */}
            <ul className="nav hidden opacity-0 md:opacity-100 md:flex space-x-8 font-medium">
                <li><a href="/#hero" className={currentView == "#hero" ? "active": ""}>Home</a></li>

                {navs.map((nav) => (
                    <li key={nav}>
                        <a href={`/#${nav.toLowerCase()}`} className={currentView === `#${nav.toLowerCase()}` ? "active" : ""} >
                            {nav}
                        </a>
                    </li>
                ))}

                <li><a href="/#contact" className={currentView == "#contact" ? "active": ""}>Contact Me</a></li>
            </ul>


            {/* theme toggler */}
            <div className="flex items-center">
                {themeBtn === "dark" && <Sun className="themeBtn" onClick={()=>setThemeBtn("light")} />}
                {themeBtn === "light" && <Moon className="themeBtn" onClick={()=>setThemeBtn("dark")} />}
                
            </div>
        </header>
    )
}