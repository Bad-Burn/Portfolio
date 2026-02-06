import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = `theme-${savedTheme}`;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `theme-${newTheme}`;
  };

  return (
    <>
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>
      <div className="bg-grid"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main id="top">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
