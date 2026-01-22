import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css';
import { PROFILE_DATA } from '../constants';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const GithubActivity: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = PROFILE_DATA.githubUsername;

        if (!username) {
          setError(true);
          setLoading(false);
          return;
        }

        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);

        if (!response.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        const data = await response.json();
        const contribs: Contribution[] = data.contributions || [];
        const total = data.total?.lastYear || contribs.reduce((acc: number, curr: Contribution) => acc + curr.count, 0);

        setTotalContributions(total);
        setContributions(contribs);
        setLoading(false);
      } catch (err) {
        console.error("Github fetch error:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (error) {
    return null;
  }

  const today = new Date();
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);

  return (
    <section className="mt-12 py-12 animate-fade-in border-t border-border/40">
      <div className="mb-6">
        <h2 className="text-3xl font-serif italic text-primary mb-2">Github Activity</h2>
        <p className="text-secondary text-sm">
          Total: <span className="text-primary font-medium">{loading ? '...' : totalContributions.toLocaleString()}</span> contributions in the last year
        </p>
      </div>

      <div className="border border-border rounded-xl p-8 bg-surface/50 backdrop-blur-sm shadow-xl overflow-x-auto">
        <div className="min-w-[800px]">
          {loading ? (
            <div className="h-[150px] flex items-center justify-center text-secondary text-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="opacity-70">Loading activity...</p>
              </div>
            </div>
          ) : (
            <div className="github-heatmap-container">
              <CalendarHeatmap
                startDate={lastYear}
                endDate={today}
                values={contributions}
                classForValue={(value) => {
                  if (!value || value.count === 0) {
                    return 'color-empty';
                  }
                  return `color-github-${value.level}`;
                }}
                tooltipDataAttrs={(value: any) => {
                  return {
                    'data-tooltip-id': 'github-tooltip',
                    'data-tooltip-content': value && value.date
                      ? `${value.date}: ${value.count} contributions`
                      : 'No contributions',
                  } as any;
                }}
                showWeekdayLabels={false}
              />
              <Tooltip
                id="github-tooltip"
                className="!bg-primary !text-surface !rounded-lg !px-3 !py-2 !text-xs !shadow-xl !font-sans"
                opacity={1}
              />
            </div>
          )}

          <div className="flex items-center justify-end gap-2 mt-6 text-[10px] uppercase tracking-wider font-medium text-secondary/60">
            <span>Less</span>
            <div className="flex gap-1.5">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-[2px] color-github-${level} border border-primary/5`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .react-calendar-heatmap .color-empty { fill: rgba(120, 120, 120, 0.08); }
        .react-calendar-heatmap .color-github-0 { fill: rgba(120, 120, 120, 0.08); }
        .react-calendar-heatmap .color-github-1 { fill: #0e4429; }
        .react-calendar-heatmap .color-github-2 { fill: #006d32; }
        .react-calendar-heatmap .color-github-3 { fill: #26a641; }
        .react-calendar-heatmap .color-github-4 { fill: #39d353; }
        
        .dark .react-calendar-heatmap .color-github-1 { fill: #0e4429; }
        .dark .react-calendar-heatmap .color-github-2 { fill: #006d32; }
        .dark .react-calendar-heatmap .color-github-3 { fill: #26a641; }
        .dark .react-calendar-heatmap .color-github-4 { fill: #39d353; }

        .react-calendar-heatmap text {
          font-size: 8px;
          fill: var(--secondary);
          opacity: 0.5;
          font-family: 'Inter', sans-serif;
        }

        .react-calendar-heatmap rect {
            rx: 2;
            ry: 2;
            transition: opacity 0.2s;
        }

        .react-calendar-heatmap rect:hover {
            opacity: 0.7;
        }

        .github-heatmap-container {
            padding: 10px 0;
        }
      `}} />
    </section>
  );
};

export default GithubActivity;