import React from 'react';

const WORDS = ['Interface design', 'Design systems', 'Prototyping', 'UX research', 'React', 'TypeScript', 'Information architecture'];

const SkillsMarquee: React.FC = () => {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden border-y border-border bg-white/[0.02] py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12 font-display font-light text-[clamp(20px,2.6vw,32px)] tracking-tight text-primary/80">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            {w}
            <span className="text-[#ff5c8a] text-[0.6em]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
