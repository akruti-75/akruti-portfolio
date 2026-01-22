import React from 'react';
import { ArrowDown, FileText, Dribbble, Linkedin, Github } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-20 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse-slow"></div>

      <div className="z-10 animate-slide-up space-y-8 max-w-4xl px-4 flex flex-col items-center">

        {/* Profile Photo with Glow */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background ring-2 ring-white/20">
            <img
              src={PROFILE_DATA.avatar}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-primary leading-[1.1]">
          Designing the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Unseen</span>, <br />
          Building the <span className="italic">Visual</span>.
        </h1>

        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
          I am <span className="text-primary font-semibold">{PROFILE_DATA.name}</span>. {PROFILE_DATA.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-background font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <FileText size={18} />
            Resume
          </a>

          <div className="flex gap-4 items-center px-6 py-4 rounded-full glass-panel hover:bg-white/5 transition-colors">
            {/* <a href={`https://dribbble.com/${PROFILE_DATA.dribbbleUsername}`} className="text-secondary hover:text-[#ea4c89] transition-colors" title="Dribbble"><Dribbble size={20} /></a> */}
            <a href={`https://linkedin.com/in/${PROFILE_DATA.linkedinUsername}/`} className="text-secondary hover:text-[#0a66c2] transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            <a href={`https://github.com/${PROFILE_DATA.githubUsername}`} className="text-secondary hover:text-primary transition-colors" title="GitHub"><Github size={20} /></a>
            <a href={`https://behance.net/${PROFILE_DATA.behanceUsername}`} className="text-secondary hover:text-[#0057ff] transition-colors" title="Behance">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.268 14.584h-6.191c.09 1.83 1.439 2.597 3.101 2.597 1.315 0 2.457-.641 2.658-1.577h3.045c-.328 2.373-2.316 4.398-5.703 4.398-4.398 0-6.191-2.819-6.191-6.012 0-3.328 1.83-6.012 5.867-6.012 3.869 0 5.672 2.518 5.672 5.093s-.26 1.514-.258 1.513zm-3.091-2.1c0-1.127-.641-1.83-1.895-1.83-1.258 0-1.954.703-2.044 1.83h3.939zM8.342 12.193v2.819h-1.09c-.585 0-1.201-.03-1.201-.765 0-.703.616-.765 1.201-.765h1.09zm-1.09-4.322c.585 0 1.09.03 1.09.765 0 .736-.505.765-1.09.765h-1.09V7.871h1.09zM0 6.136h7.248c3.473 0 4.139 1.921 4.139 3.111 0 1.514-1.09 2.417-1.996 2.76.903.344 2.227 1.259 2.227 3.256 0 2.044-1.259 4.737-5.592 4.737H0V6.136zm20.21-1.547h-6.191V3h6.191v1.589zM3.057 17.584h2.518c1.327 0 1.327-1.439 1.327-1.439h3.101c0 3.328-4.427 3.328-4.427 3.328H0V8.955h7.221c1.327 0 1.327 1.327 1.327 1.327H5.447s0-1.327-1.327-1.327h-1.063v10.029z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 animate-float text-secondary/30">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;