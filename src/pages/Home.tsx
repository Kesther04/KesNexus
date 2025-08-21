import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ScrollToTop from "../../utils/ScrollToTop"
// import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <ScrollToTop />

            <Header />
            
            <main>    
                <Hero />
                <About />
                <Services />
                <Projects />
                <Contact/>
            </main>
            
            <Footer/>
        </>
    );
}