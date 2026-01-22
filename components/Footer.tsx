import React from 'react';
import { PROFILE_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 flex flex-col md:flex-row justify-between items-start md:items-end text-xs text-secondary gap-4 border-t border-border mt-20">
      <div className="space-y-1">
        <p>Designed & Developed by {PROFILE_DATA.name}</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
      
      <div className="flex flex-col md:items-end space-y-1">
        <p>Crafted with <span className="text-primary">React & Tailwind</span></p>
        <p>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })} • {PROFILE_DATA.location}</p>
      </div>
    </footer>
  );
};

export default Footer;