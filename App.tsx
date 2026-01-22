import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';
import GithubActivity from './components/GithubActivity';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');

  const handleViewChange = (view: 'home' | 'projects') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/30 transition-colors duration-300">
      <Navbar currentView={currentView} onViewChange={handleViewChange} />

      <main className="max-w-6xl mx-auto px-6 md:px-12">
        {currentView === 'home' ? (
          <div className="animate-fade-in space-y-16">
            <Hero />
            <Skills />
            <Experience />
            <GithubActivity />
            <Contact />
          </div>
        ) : (
          <div className="animate-fade-in pt-12">
            <Projects />
          </div>
        )}

        <Footer />
      </main>

      <AIChatBot />
    </div>
  );
};

export default App;