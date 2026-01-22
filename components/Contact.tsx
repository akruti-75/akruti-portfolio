import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="glass-panel p-8 rounded-3xl relative overflow-hidden group">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:bg-accent/15 transition-colors duration-700"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-24 -mb-24"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
        <div>
          <h2 className="text-4xl font-serif italic text-primary mb-4">Let's create together</h2>
          <p className="text-secondary text-lg leading-relaxed max-w-xl">
            I'm currently open to new opportunities, freelance projects, or just a chat about design systems and frontend engineering.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="flex items-center justify-center gap-4 px-8 py-5 rounded-full bg-primary text-background font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/10"
          >
            <Mail size={22} />
            <span>Send an Email</span>
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;