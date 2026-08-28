import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-blue-400">
          04 / EXPERIENCE
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[.5fr_1.5fr]">
          <div>
            <p className="font-mono text-sm text-blue-300">
              2024 — PRESENT
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l border-blue-500/30 pl-8"
          >
            <h2 className="text-3xl font-semibold text-white">
              Full Stack Developer
            </h2>

            <p className="mt-2 text-slate-300">
              DataSpark AI Solutions Pvt. Ltd.
            </p>

            <p className="mt-7 max-w-3xl leading-relaxed text-slate-300">
              Developing and maintaining production web applications
              across frontend, backend, database and AI-powered
              workflows.
            </p>

            <ul className="mt-8 space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Designed and developed REST APIs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Built React-based frontend applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Worked with relational and NoSQL databases.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Integrated AI and third-party services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Debugged and resolved production issues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span>Supported B2C, B2B and B2E application workflows.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}