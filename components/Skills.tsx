import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by the new categories
  const designSkills = SKILLS.filter(s => s.category === 'Interface Design');
  const engineeringSkills = SKILLS.filter(s => s.category === 'Engineering Core');
  const uiSkills = SKILLS.filter(s => s.category === 'UI & Styling');
  const workflowSkills = SKILLS.filter(s => s.category === 'Workflow & Ops');

  const SkillCard = ({ title, skills, colorClass, gradient }: { title: string, skills: typeof SKILLS, colorClass: string, gradient: string }) => (
    <div className={`relative glass-panel p-8 rounded-3xl overflow-hidden group hover:border-accent/30 transition-all duration-500 shadow-xl shadow-black/5`}>
      {/* Background Gradient */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full blur-[80px] opacity-10 group-hover:opacity-25 transition-opacity duration-700`}></div>

      <div className="relative z-10">
        <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-8 ${colorClass} opacity-80`}>{title}</h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2.5 px-3.5 py-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt=""
                  className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
                />
              )}
              <span className="text-[13px] font-medium text-primary/90">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-3xl font-serif italic text-primary text-left">Tools of Trade</h2>
        <div className="h-px bg-border flex-1 ml-4 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <SkillCard
          title="Interface Design"
          skills={designSkills}
          colorClass="text-pink-400"
          gradient="from-pink-500 to-rose-500"
        />
        <SkillCard
          title="Engineering Core"
          skills={engineeringSkills}
          colorClass="text-blue-400"
          gradient="from-blue-500 to-cyan-500"
        />
        <SkillCard
          title="UI & Styling"
          skills={uiSkills}
          colorClass="text-emerald-400"
          gradient="from-emerald-500 to-teal-500"
        />
        <SkillCard
          title="Workflow & Ops"
          skills={workflowSkills}
          colorClass="text-amber-400"
          gradient="from-amber-500 to-orange-500"
        />
      </div>
    </section>
  );
};

export default Skills;