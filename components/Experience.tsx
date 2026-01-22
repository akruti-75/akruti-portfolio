import React, { useState } from 'react';
import { EXPERIENCE, SKILLS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(EXPERIENCE[0]?.id || null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-3xl font-serif italic text-primary">Work History</h2>
        <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
      </div>

      <div className="space-y-4">
        {EXPERIENCE.map((job) => {
          const isOpen = openId === job.id;
          return (
            <div
              key={job.id}
              className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen
                  ? 'bg-surface/80 border-accent/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] ring-1 ring-accent/10'
                  : 'bg-transparent border-transparent hover:bg-surface/50 hover:border-border/80 hover:shadow-2xl hover:-translate-y-1'
                }`}
            >
              {/* Header */}
              <div
                className="flex items-start md:items-center justify-between cursor-pointer p-4 md:p-6"
                onClick={() => toggle(job.id)}
              >
                <div className="flex items-center gap-5">
                  {/* Logo Box */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors shadow-sm ${isOpen ? 'bg-primary text-background border-primary' : 'bg-surface border-border text-primary'}`}>
                    {job.logo?.includes('http') ? (
                      <img src={job.logo} alt={job.company} className="w-6 h-6 object-contain transition-all" />
                    ) : (
                      <span className="text-sm font-bold">{job.company[0]}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                      {job.company}
                    </h3>
                    <p className="text-sm font-medium text-secondary">{job.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-xs font-mono text-secondary uppercase tracking-wider hidden sm:block bg-muted/50 px-2 py-1 rounded-md border border-border/50">{job.period}</span>
                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-background rotate-180' : 'bg-transparent text-secondary border border-border group-hover:border-primary group-hover:text-primary'
                      }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </button>
                </div>
              </div>

              {/* Content using Grid transition trick */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 pl-4 md:pl-[5.5rem] pr-6 md:pr-12">
                    <div className="w-full h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-6"></div>

                    {/* Mobile Date (shown here if hidden above) */}
                    <div className="sm:hidden mb-4">
                      <span className="text-xs font-mono text-secondary uppercase tracking-wider bg-muted/50 px-2 py-1 rounded-md border border-border/50">{job.period}</span>
                    </div>

                    {/* Description List */}
                    <ul className="space-y-3 mb-6">
                      {job.description.map((desc, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-secondary leading-relaxed group-hover:text-primary/80 transition-colors">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0 opacity-70"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Tags with Icons */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skillName) => {
                          const skillData = SKILLS.find(s => s.name.toLowerCase() === skillName.toLowerCase());
                          return (
                            <span key={skillName} className="group/skill flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted/30 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all text-secondary rounded-xl border border-border/40">
                              {skillData?.icon && (
                                <img
                                  src={skillData.icon}
                                  alt=""
                                  className="w-3.5 h-3.5 object-contain opacity-60 group-hover/skill:opacity-100 transition-opacity grayscale group-hover/skill:grayscale-0"
                                />
                              )}
                              {skillName}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Experience;