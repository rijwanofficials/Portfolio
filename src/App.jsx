import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Contact from './components/Components';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
