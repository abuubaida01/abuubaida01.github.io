import { ArrowUpRight, ExternalLink, GitFork } from "lucide-react";
import { projects as allProjects } from "../data/resume";
import type { Project } from "../data/resume";
import { Reveal } from "./Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glass flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-card dark:hover:border-slate-600/80 sm:p-7">
      <div className="flex items-start justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white/60 text-sm font-bold dark:border-slate-700/60 dark:bg-ink/60"
          style={{ color: project.accent }}
        >
          {project.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex gap-1.5">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label="Source code"
            title="Source code"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            <GitFork className="h-4 w-4" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label="Live site"
            title="Live site"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">{project.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-indigo-700/90 dark:text-indigo-300/90">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-slate-500">
            <ArrowUpRight
              className="mt-0.5 h-3.5 w-3.5 shrink-0"
              style={{ color: project.accent }}
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200 pt-4 dark:border-slate-800/70">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-600 dark:border-slate-700/70 dark:bg-slate-800/40 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const projects = allProjects;

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">02 · Featured Work</p>
          <h2 className="section-title">Projects That Ship</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Real production systems judged by real-world utility, backend complexity, and polished
            execution — not throwaway demos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
