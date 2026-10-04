import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
  tall?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '', tall = false }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const hasLink = Boolean(project.link);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const body = (
    <>
      {/* Cursor spotlight */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,0%),rgba(124,92,255,0.22),transparent_60%)]" />

      <div className={`relative overflow-hidden rounded-[18px] bg-black/30 ${tall ? 'aspect-[4/5]' : 'aspect-[16/10]'}`}>
        {imgFailed || !project.image ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b2f8f] to-[#7a5cff] flex items-center justify-center text-white/70 text-xs font-mono uppercase tracking-widest">
            Cover coming soon
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        )}
      </div>

      <div className="flex items-end justify-between gap-4 px-2.5 pb-1.5">
        <div className="min-w-0">
          <span className="inline-block px-3 py-1 rounded-full border border-border text-xs text-secondary">{project.category}</span>
          <h3 className="mt-2 text-lg md:text-xl font-medium tracking-tight text-primary">{project.title}</h3>
          {project.description && <p className="text-sm text-secondary mt-1 line-clamp-1">{project.description}</p>}
        </div>
        {hasLink ? (
          <span className="shrink-0 w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-background">
            <ArrowUpRight size={18} />
          </span>
        ) : (
          <span className="shrink-0 text-[11px] font-mono uppercase tracking-wider text-secondary">Soon</span>
        )}
      </div>
    </>
  );

  const base = `group relative flex flex-col gap-4 p-3.5 rounded-[28px] border border-border bg-white/[0.035] transition-all duration-300 hover:border-white/25 ${className}`;

  return hasLink ? (
    <a href={project.link} target="_blank" rel="noreferrer" onPointerMove={onMove} className={base}>
      {body}
    </a>
  ) : (
    <div onPointerMove={onMove} className={base}>
      {body}
    </div>
  );
};

export default ProjectCard;
