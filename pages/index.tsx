import MainNav from "@/components/MainNav";
import About from "../components/About";
// import NavBar from "../components/AnotherNav";
import BTWP from "../components/BetweenPages";
import ComeWork from "../components/ComeWork";
import Contact from "../components/Contact";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Services from "../components/Services";
import Trained from "../components/Trained";
import Vetted from "../components/Vetted";

export default function Index() {
    return (
        <main>
            <div className="pt-[30px]">
                {/* <Navbar />
    <Services /> */}
                {/* <NavBar /> */}
                <MainNav/>
                <BTWP />
                <Hero />
                <BTWP />
                <About />
                <BTWP />
                <Fleet />
                <BTWP />
                <Services />
                <BTWP />
                <Vetted />
                <BTWP />
                <Trained />
                <BTWP />
                <Contact />
            </div>
            <div>
                <BTWP />
                <Quote />
                <ComeWork />
                <Footer />
            </div>
        </main>
    );
}
