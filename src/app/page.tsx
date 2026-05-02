import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import BookSection from '../components/BookSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications/>
      <BookSection/>
      <Contact />
      <Footer />
    </main>
  );
}
