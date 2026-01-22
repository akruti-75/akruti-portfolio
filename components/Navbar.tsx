import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

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

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto glass-panel shadow-2xl rounded-full px-6 py-2.5 flex items-center gap-6 transition-all duration-300 hover:bg-surface/80">
        <div className="flex space-x-1 bg-white/5 rounded-full p-1 border border-white/5">
          <button 
            onClick={() => onViewChange('home')}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              currentView === 'home' 
                ? 'bg-primary text-background shadow-md' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => onViewChange('projects')}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              currentView === 'projects' 
                ? 'bg-primary text-background shadow-md' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            Work
          </button>
        </div>
        
        <div className="w-px h-4 bg-border/50"></div>

        <button 
          onClick={toggleTheme}
          className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Toggle Theme"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;