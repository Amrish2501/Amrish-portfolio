import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-sm text-blue-400">01 / PROFILE</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Engineering
              <br />
              mindset.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl leading-relaxed text-slate-100">
              I'm a Full Stack Developer focused on building reliable,
              scalable and user-friendly applications.
            </p>

            <p className="mt-7 text-lg leading-relaxed text-slate-400">
              My work spans backend API development, modern React
              applications, database design, authentication, third-party
              integrations and AI-powered features.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["2+", "Years Experience"],
                ["Python", "Backend"],
                ["React", "Frontend"],
                ["AI", "Emerging Focus"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-purple-950/20 p-5 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="text-xl font-semibold text-blue-400">{value}</div>
                  <div className="mt-2 text-xs text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}