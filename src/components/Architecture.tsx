import { motion } from "framer-motion";

const layers = [
  {
    title: "CLIENT",
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "API",
    items: ["FastAPI", "Flask", "REST"],
  },
  {
    title: "DATA",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "AI / SERVICES",
    items: ["OpenAI", "RAG", "Embeddings"],
  },
];

export default function Architecture() {
  return (
    <section className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-blue-400">
          03 / ENGINEERING
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          From interface
          <br />
          to infrastructure.
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-purple-950/20 p-6 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <span className="font-mono text-xs text-blue-400">
                0{index + 1}
              </span>

              <h3 className="mt-5 text-sm font-medium text-white">
                {layer.title}
              </h3>

              <div className="mt-6 space-y-3">
                {layer.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-blue-500/20 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 hover:border-blue-400/40 hover:bg-blue-950/30 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}