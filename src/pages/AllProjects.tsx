import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function AllProjects () {
    return (
        <>
            <Header/>

            <main>
                <Projects/>
                <Contact/>
            </main>

            <Footer/>
        </>
    )
}