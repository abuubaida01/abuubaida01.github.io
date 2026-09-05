import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/resume";
import { Reveal } from "./Reveal";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">01 · Career Path</p>
          <h2 className="section-title">Production Experience & Achievements</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A track record of architecting enterprise systems, cutting manual workflows, and
            shipping AI systems that absorb real support load.
          </p>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent sm:left-[15px]" />

          <div className="space-y-10">
            {experience.map((role, i) => (
              <Reveal key={`${role.company}-${role.title}`} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-8 top-5 h-3.5 w-3.5 rounded-full border-2 border-indigo-400 bg-ink sm:-left-10" />
                  <div className="glass p-6 transition-colors duration-300 hover:border-slate-600/80 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-50">
                        <Briefcase className="h-4 w-4 text-indigo-400" />
                        {role.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">{role.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-indigo-300">{role.company}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" /> {role.location}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {role.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-700/70 bg-slate-800/40 px-2 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
