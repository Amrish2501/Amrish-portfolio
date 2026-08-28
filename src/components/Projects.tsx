import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "HRMS Management System",
    description:
      "A full-stack human resource management platform covering employee operations, attendance, leave, payroll and task management.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Vite", "Axios", "Bcrypt", "Nodemailer", "PDFKit", "Docker", "Jest"],
    type: "FULL STACK",
    link: "https://hrm.dsparkai.com"
  },
  {
    number: "02",
    title: "Interview Management Platform",
    description:
      "Multi-module interview platform supporting B2C, B2B and B2E workflows with technical interviews, coding, aptitude, GD and analytics.",
    stack: ["Python", "React", "PostgreSQL", "MongoDB", "AI"],
    type: "AI FULL STACK",
    link: "https://g.sasthra.in"
  },
  {
    number: "03",
    title: "SAI Platform",
    description:
      "Designed and implemented role-based onboarding for 6 user roles with secure authentication and authorization workflows. Built multiple microservices architecture with Mentor Attendance Tracker (check-in/out, break tracking) and Student-Mentor Community modules with chat and image-sharing functionality. Created comprehensive Swagger/OpenAPI documentation.",
    stack: ["Python", "React", "PostgreSQL", "MongoDB", "AI"],
    type: "AI FULL STACK",
    link: "https://sai.sasthra.in",
  },
  {
    number: "04",
    title: "IELTS & PTE Platforms",
    description:
      "Developed authentication, onboarding, and email verification workflows with learning module management. Implemented promo code management and module-based trial access. Built backend services for Homophones and Idioms modules. Developed and maintained comprehensive Admin Panel backend services.",
    stack: ["Python", "React", "MySQL"],
    type: "FULL STACK",
    link: "https://e-ielts.sasthra.in",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-blue-500/20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-mono text-sm text-blue-400">
              02 / SELECTED WORK
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Things I've built.
            </h2>
          </div>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-purple-950/10 p-7 transition hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 sm:p-10"
            >
              <div className="absolute right-8 top-8 text-7xl font-bold text-blue-500/[0.05]">
                {project.number}
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
                <div>
                  <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-7 flex gap-3">
                    <a
                      href={project.link || "#"}
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      View Project
                      <ArrowUpRight size={15} />
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition"
                    >
                      <FaGithub size={15} />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/30 bg-slate-950/50 p-6 backdrop-blur-sm">
                  <p className="mb-5 font-mono text-xs text-blue-400">
                    TECHNOLOGY
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-2 text-sm text-slate-200 hover:border-blue-400/50 hover:bg-blue-900/30 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 h-32 rounded-lg border border-dashed border-blue-500/30 flex items-center justify-center font-mono text-xs text-blue-400/50 bg-blue-950/20">
                    PROJECT PREVIEW
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}