import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-blue-400">
          06 / CONTACT
        </p>

        <div className="mt-10 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-purple-950/20 p-8 sm:p-14 shadow-2xl shadow-blue-500/10">
          <p className="font-mono text-sm text-blue-300">
            HAVE A ROLE OR PROJECT?
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl text-white">
            Let's build something
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> meaningful.</span>
          </h2>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 text-white transition hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <Mail size={17} />
            Get in touch
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}