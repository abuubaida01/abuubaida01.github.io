import { Award, GraduationCap, BadgeCheck } from "lucide-react";
import { recognition } from "../data/resume";
import { Reveal } from "./Reveal";

export default function Impact() {
  return (
    <section id="impact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">04 · Leadership & Recognition</p>
          <h2 className="section-title">Signal Over Noise</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Formal recognition and credentials that validate the work behind the metrics.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Award */}
          <Reveal>
            <div className="glass flex h-full flex-col p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/[0.06] text-amber-300">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-50">
                {recognition.award.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-500">
                {recognition.award.org} · {recognition.award.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {recognition.award.detail}
              </p>
            </div>
          </Reveal>

          {/* Degree */}
          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/[0.06] text-indigo-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-50">
                {recognition.degree.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-500">
                {recognition.degree.school} · {recognition.degree.year} · {recognition.degree.level}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {recognition.degree.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-slate-700/60 bg-slate-800/40 px-2 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.16}>
            <div className="glass flex h-full flex-col p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/[0.06] text-blue-300">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-50">Certifications</h3>
              <ul className="mt-3 space-y-3">
                {recognition.certifications.map((c) => (
                  <li key={c.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-300">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-slate-500">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
