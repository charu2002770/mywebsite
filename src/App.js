
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Internship from './components/Internship';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Internship />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
