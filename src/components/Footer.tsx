import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <a href="#about" className="font-mono text-base font-semibold text-slate-50">
          <span className="text-indigo-400">AU</span>
          <span className="text-slate-500">.</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:text-slate-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:text-slate-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:text-slate-100"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume (PDF)"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/70 bg-white/[0.02] px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-white/[0.05]"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        <p className="font-mono text-xs text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
