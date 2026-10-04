import React from 'react';
import { PROJECTS, getExperienceStat } from '../constants';
import ProjectCard from './ProjectCard';

const SPANS = ['md:col-span-8', 'md:col-span-4', 'md:col-span-6', 'md:col-span-6'];

const FeaturedWork: React.FC = () => {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 4);

  const stats = [
    { value: getExperienceStat(), label: 'Experience' },
    { value: '10+', label: 'Projects' },
    { value: 'React', label: 'Design to code' },
    { value: 'SaaS', label: 'Enterprise focus' },
  ];

  return (
    <section id="work" className="py-12">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-secondary">Selected work</span>
      <h2 className="mt-3 font-display font-light tracking-[-0.04em] leading-none text-[clamp(32px,4.6vw,60px)] text-balance">
        Products I've <em className="font-serif font-normal not-italic italic text-[1.1em] tracking-normal">designed</em> and shipped.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-12">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} tall={i === 1} className={SPANS[i]} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 rounded-3xl overflow-hidden border border-border bg-border">
        {stats.map(s => (
          <div key={s.label} className="bg-surface p-6 md:p-7">
            <b className="block font-display font-light text-[clamp(30px,4vw,52px)] tracking-[-0.04em]">{s.value}</b>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-secondary">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
