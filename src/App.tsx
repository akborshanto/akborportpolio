import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollProgress from './components/shared/ScrollProgress';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;