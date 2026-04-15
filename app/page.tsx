import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Profile photo + self introduction */}
        <Hero />

        {/* 2. Projects showcase */}
        <Projects />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Experience timeline */}
        <Experience />

        {/* 5. Contact & links */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
