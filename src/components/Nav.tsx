import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/resume";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const sectionHref = (id: string) => `#${id}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-slate-50/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-ink/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#about" className="font-mono text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          <span className="text-indigo-600 dark:text-indigo-400">AU</span>
          <span className="text-slate-400 dark:text-slate-500">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={sectionHref(id)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                active === id
                  ? "text-indigo-600 dark:text-indigo-300"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white shadow-glow transition-all duration-200 hover:bg-indigo-400"
          >
            <Download className="h-4 w-4" />
            View Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-slate-50/95 backdrop-blur-xl dark:border-slate-800/70 dark:bg-ink/95 md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={sectionHref(id)}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-slate-100"
                >
                  {label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
                >
                  <Download className="h-4 w-4" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
