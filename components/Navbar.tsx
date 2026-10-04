import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

interface NavbarProps {
  currentView: 'home' | 'projects';
  onViewChange: (view: 'home' | 'projects') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const tab = (view: 'home' | 'projects', label: string) => (
    <button
      onClick={() => onViewChange(view)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        currentView === view ? 'bg-primary text-background' : 'text-secondary hover:text-primary hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-xl pl-5 pr-1.5 py-1.5 shadow-2xl shadow-black/20">
        <span className="hidden sm:block font-semibold text-sm tracking-tight mr-4">{PROFILE_DATA.name}</span>
        {tab('home', 'Portfolio')}
        {tab('projects', 'Work')}
        <button
          onClick={toggleTheme}
          className="text-secondary hover:text-primary transition-colors p-2.5 rounded-full hover:bg-white/10"
          aria-label="Toggle Theme"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <a
          href={`mailto:${PROFILE_DATA.email}`}
          className="hidden sm:block px-4 py-2 rounded-full bg-primary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Let's talk
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
