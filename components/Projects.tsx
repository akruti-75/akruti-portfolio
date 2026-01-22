import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Eye, Heart, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'UI/UX', 'Frontend', 'Mobile Design', 'Design Systems'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="work" className="pt-24 pb-20">

      {/* Behance Header Integration */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-serif italic text-primary mb-3">Selected Works</h2>
          <p className="text-secondary text-lg">A curated selection of projects from Dribbble & Behance.</p>
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
            <div key={project.id} className="group flex flex-col gap-4">

              {/* Card Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border/50 group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500">
                <img
                  src={project.image || "https://via.placeholder.com/400x300?text=Project"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a
                    href={project.link || '#'}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    title="View Live"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Info */}
              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-secondary text-sm mt-1 line-clamp-1">{project.description}</p>
                </div>


              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;