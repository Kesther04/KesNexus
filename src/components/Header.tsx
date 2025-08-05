import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Frame } from "lucide-react";
import { useEffect, useState } from "react";

// This is the header component that will be used across the application
export default function Header () { 
    const [scrolled, setScrolled] = useState(false);
    const [themeBtn, setThemeBtn] = useState("light");
    
    const location = useLocation();
    let currentView = location.hash;

    // to handle when page reaches a certain scrolled position
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex items-center justify-between space-x-4 p-4  fixed bg-white/80 w-full backdrop-blur-sm z-20 ${scrolled ? "shadow-md" : ""}`}>

            
            {/* logo for the header */}
            <div className="cursor-pointer flex items-center">
                <Link to="/"><Frame className="w-8 h-8 " /></Link>
            </div>

            {/* navigation links for the header */}
            <ul className="nav flex space-x-8">
                <li><a href="/#hero" className={currentView == "#hero" ? "active": ""}>Home</a></li>
                <li><a href="/#about" className={currentView == "#about" ? "active": ""}>About</a></li>
                <li><a href="/#services" className={currentView == "#services" ? "active": ""}>Services</a></li>
                <li><a href="/#projects" className={currentView == "#projects" ? "active": ""}>Projects</a></li>
                <li><a href="/#testimonials" className={currentView == "#testimonials" ? "active" : ""}>Testimonials</a></li>
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