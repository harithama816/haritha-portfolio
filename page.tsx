import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
