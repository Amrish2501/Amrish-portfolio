import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.4fr_.6fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3 font-mono text-sm text-slate-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
          >
            AMRISH
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">A.L.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-300 sm:text-2xl"
          >
            Full Stack Developer building scalable web applications
            with <span className="text-blue-400 font-semibold">Python, React & AI.</span>
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/Amrish.pdf"
              download
              className="flex items-center gap-3 rounded-full border border-blue-500/30 px-6 py-3 text-sm text-white transition hover:bg-blue-500/10 hover:border-blue-400"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex">
          <div className="w-full max-w-sm rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-purple-950/30 p-5 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-blue-400">
                ENGINEER_PROFILE
              </span>
              <span className="text-xs text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            <div className="space-y-5 font-mono text-sm">
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <span className="text-blue-500">01</span>
                <span className="ml-5 text-slate-200">
                  Python / FastAPI
                </span>
              </div>

              <div className="flex items-center hover:translate-x-1 transition-transform">
                <span className="text-blue-500">02</span>
                <span className="ml-5 text-slate-200">
                  React / TypeScript
                </span>
              </div>

              <div className="flex items-center hover:translate-x-1 transition-transform">
                <span className="text-blue-500">03</span>
                <span className="ml-5 text-slate-200">
                  PostgreSQL / MySQL
                </span>
              </div>

              <div className="flex items-center hover:translate-x-1 transition-transform">
                <span className="text-blue-500">04</span>
                <span className="ml-5 text-slate-200">
                  AI / RAG / LLM
                </span>
              </div>

              <div className="flex items-center hover:translate-x-1 transition-transform">
                <span className="text-blue-500">05</span>
                <span className="ml-5 text-slate-200">
                  Docker / Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 transition hover:text-blue-300"
      >
        <ArrowDown className="animate-bounce" />
      </button>
    </section>
  );
}