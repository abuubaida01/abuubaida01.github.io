import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { metrics, profile } from "../data/resume";
import avatar from "../assets/images/personal-pic1.png";

export default function Hero() {
  return (
    <section id="about" className="relative flex min-h-screen items-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">{profile.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-slate-50 sm:text-5xl lg:text-[3.4rem]"
            >
              {profile.headline.split(" and agentic workflows.")[0]}
              <span className="whitespace-nowrap">
                {" "}
                and{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  agentic workflows.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-glow transition-all duration-200 hover:bg-indigo-400"
              >
                View Featured Work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-slate-500 hover:bg-white/[0.05]"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/10 blur-2xl" />
              <img
                src={avatar}
                alt={`${profile.name} — Portfolio avatar`}
                width={340}
                height={340}
                className="relative rounded-full border border-slate-700/60 object-cover"
                loading="eager"
              />
              <div className="absolute -right-2 top-8 rounded-lg border border-slate-700/60 bg-ink/90 px-3 py-2 font-mono text-[11px] text-slate-300 backdrop-blur">
                <span className="text-indigo-400">$</span> python -m build_ai
              </div>
              <div className="absolute -left-4 bottom-10 rounded-lg border border-slate-700/60 bg-ink/90 px-3 py-2 font-mono text-[11px] text-slate-300 backdrop-blur">
                <span className="text-emerald-400">✓</span> prod.healthy
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="glass p-5">
              <div className="font-mono text-3xl font-semibold text-slate-50">{m.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
