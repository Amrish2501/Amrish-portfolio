const skills = {
  "LANGUAGES": ["Python", "JavaScript", "TypeScript"],
  "BACKEND": ["Node.js","FastAPI", "Flask", "REST API", "JWT"],
  "FRONTEND": ["React", "TypeScript", "Tailwind CSS", "Vite"],
  "DATABASE": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "AI / ML": ["OpenAI", "RAG", "Embeddings", "FAISS"],
  "DEVOPS / TOOLS": ["Docker", "Git", "GitLab", "Swagger"],
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-blue-400">
          05 / TECH STACK
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Technical arsenal.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-950/90 p-7 hover:bg-slate-900/90 transition"
            >
              <p className="font-mono text-xs text-blue-400">
                {category}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-950/50 border border-blue-500/20 px-3 py-2 text-sm text-slate-200 hover:border-blue-400/40 hover:bg-blue-900/30 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}