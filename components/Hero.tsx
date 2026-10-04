import React from 'react';
import { ArrowRight, FileText, Linkedin, Github } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-start gap-8 pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Tilted portrait */}
      <div className="hidden md:block absolute right-0 top-32 w-40 lg:w-52 aspect-[3/4] rounded-[22px] overflow-hidden border border-border rotate-[4deg] shadow-2xl shadow-black/40 animate-fade-in">
        <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} className="w-full h-full object-cover" />
      </div>

      <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-white/5 text-[13px] text-primary/80 animate-fade-in">
        <i className="w-2 h-2 rounded-full bg-[#33d6c1] shadow-[0_0_0_4px_rgba(51,214,193,0.18)]"></i>
        {PROFILE_DATA.availability}
      </span>

      <h1 className="font-display font-light tracking-[-0.045em] leading-[0.95] text-[clamp(40px,7.2vw,108px)] text-balance md:pr-44 lg:pr-56 animate-slide-up">
        Designing <span className="text-transparent [-webkit-text-stroke:1.5px_var(--secondary)]">complex</span>
        <br />
        systems that feel{' '}
        <span className="font-bold bg-gradient-to-r from-[#7c5cff] via-[#ff5c8a] to-[#ffb86b] bg-clip-text text-transparent">effortless.</span>
      </h1>

      <p className="max-w-xl text-lg md:text-xl text-secondary leading-relaxed">
        {PROFILE_DATA.bio.split('. ')[0]}. I research, prototype and ship the React UI myself.
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#7c5cff] to-[#ff5c8a] shadow-[0_14px_40px_rgba(124,92,255,0.35)] hover:-translate-y-0.5 transition-transform"
        >
          View selected work <ArrowRight size={16} />
        </a>
        <a
          href={PROFILE_DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sm border border-border bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
        >
          <FileText size={16} /> Resume
        </a>
        <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-border bg-white/5">
          <a href={`https://linkedin.com/in/${PROFILE_DATA.linkedinUsername}/`} target="_blank" rel="noreferrer" className="p-2 text-secondary hover:text-[#0a66c2] transition-colors" title="LinkedIn"><Linkedin size={18} /></a>
          <a href={`https://github.com/${PROFILE_DATA.githubUsername}`} target="_blank" rel="noreferrer" className="p-2 text-secondary hover:text-primary transition-colors" title="GitHub"><Github size={18} /></a>
          <a href={`https://behance.net/${PROFILE_DATA.behanceUsername}`} target="_blank" rel="noreferrer" className="p-2 text-secondary hover:text-[#0057ff] transition-colors" title="Behance">
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.268 14.584h-6.191c.09 1.83 1.439 2.597 3.101 2.597 1.315 0 2.457-.641 2.658-1.577h3.045c-.328 2.373-2.316 4.398-5.703 4.398-4.398 0-6.191-2.819-6.191-6.012 0-3.328 1.83-6.012 5.867-6.012 3.869 0 5.672 2.518 5.672 5.093s-.26 1.514-.258 1.513zm-3.091-2.1c0-1.127-.641-1.83-1.895-1.83-1.258 0-1.954.703-2.044 1.83h3.939zM8.342 12.193v2.819h-1.09c-.585 0-1.201-.03-1.201-.765 0-.703.616-.765 1.201-.765h1.09zm-1.09-4.322c.585 0 1.09.03 1.09.765 0 .736-.505.765-1.09.765h-1.09V7.871h1.09zM0 6.136h7.248c3.473 0 4.139 1.921 4.139 3.111 0 1.514-1.09 2.417-1.996 2.76.903.344 2.227 1.259 2.227 3.256 0 2.044-1.259 4.737-5.592 4.737H0V6.136zm20.21-1.547h-6.191V3h6.191v1.589zM3.057 17.584h2.518c1.327 0 1.327-1.439 1.327-1.439h3.101c0 3.328-4.427 3.328-4.427 3.328H0V8.955h7.221c1.327 0 1.327 1.327 1.327 1.327H5.447s0-1.327-1.327-1.327h-1.063v10.029z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
