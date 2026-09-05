import { Boxes, Cpu, LayoutTemplate, Cloud } from "lucide-react";
import { skillGroups } from "../data/resume";
import { Reveal } from "./Reveal";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Boxes, Cpu, LayoutTemplate, Cloud];

export default function TechStackGrid() {
  return (
    <section id="tech-stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">03 · Competencies</p>
          <h2 className="section-title">Technical Skills & System Architecture</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            The primitives I use to design systems — grouped by the layers they operate in, not
            ranked with generic progress bars.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 0.07}>
                <div className="glass flex h-full flex-col p-6 transition-colors duration-300 hover:border-slate-400 dark:hover:border-slate-600/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white/60 text-indigo-600 dark:border-slate-700/60 dark:bg-ink/60 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-slate-50">{group.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{group.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/40 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
