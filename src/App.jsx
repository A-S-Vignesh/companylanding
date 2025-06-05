
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import GroupCompany from './components/GroupCompany';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import Milestones from './components/Milestones';

function App() {

  return (
    <div className="scroll-smooth">
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Hero />
      <hr />
      <About />
      <GroupCompany />
      <Stats />
      {/* <Milestones /> */}
      <hr />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
