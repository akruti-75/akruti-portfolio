import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'UI/UX', 'Frontend', 'Design Systems'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section className="pt-24 pb-20">

      {/* Behance Header Integration */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-display font-light tracking-[-0.04em] text-[clamp(32px,4.6vw,60px)] leading-none text-primary mb-3">Selected <span className="font-serif italic font-normal tracking-normal text-[1.1em]">works</span></h2>
          <p className="text-secondary text-lg">A curated selection of projects from Behance.</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://behance.net/akrutikasture"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0057ff] text-white rounded-full text-sm font-bold hover:bg-[#0047d1] transition-colors shadow-lg shadow-blue-500/20"
          >
            <span className="font-serif italic text-lg">Bē</span> Behance Profile
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeTab === cat
              ? 'bg-primary text-background border-primary'
              : 'bg-transparent text-secondary border-border hover:border-primary hover:text-primary'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length === 0 ? (
          <div className="col-span-2 text-center text-secondary py-12">
            No projects available for this category yet. Stay tuned for updates!
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;