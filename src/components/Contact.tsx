import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/resume";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(name ?? "you")}`);
    const body = encodeURIComponent(
      `Hi Abu,\n\n${String(message ?? "")}\n\n— ${String(name ?? "")} (${String(email ?? "")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">05 · Contact</p>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Whether it's a product, a platform, or a hard backend problem — I usually reply within
            24 hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact meta */}
          <Reveal>
            <div className="glass flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-400/20 bg-indigo-400/[0.06] text-indigo-600 dark:text-indigo-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{profile.email}</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  copied
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-white/[0.02] dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-white/[0.05]"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" /> Copied to clipboard
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy Email
                  </>
                )}
              </button>

              <div className="mt-6 space-y-5 border-t border-slate-200 pt-6 dark:border-slate-800/70">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-sm">{profile.location} · Remote friendly</span>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-lg border border-slate-200 bg-white/60 p-4 font-mono text-xs leading-relaxed text-slate-500 dark:border-slate-800/70 dark:bg-ink/60 dark:text-slate-400">
                  <div>
                    <span className="text-slate-400 dark:text-slate-600">{"// "}</span>open to Full-Stack & AI roles
                  </div>
                  <div>
                    <span className="text-indigo-600 dark:text-indigo-400">const</span>{" "}
                    <span className="text-slate-800 dark:text-slate-200">status</span> ={" "}
                    <span className="text-emerald-600 dark:text-emerald-400">'actively interviewing'</span>;
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass flex h-full flex-col gap-5 p-6 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Jane Recruiter"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500/70 dark:border-slate-700/70 dark:bg-ink/60 dark:text-slate-200 dark:placeholder-slate-600"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500/70 dark:border-slate-700/70 dark:bg-ink/60 dark:text-slate-200 dark:placeholder-slate-600"
                  />
                </label>
              </div>
              <label className="block flex-1">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role, product, or problem…"
                  className="h-full w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500/70 dark:border-slate-700/70 dark:bg-ink/60 dark:text-slate-200 dark:placeholder-slate-600"
                />
              </label>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white shadow-glow transition-all duration-200 ${
                  sent ? "bg-emerald-500" : "bg-indigo-500 hover:bg-indigo-400"
                }`}
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Opening your mail client…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
