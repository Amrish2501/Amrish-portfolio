import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const links = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button
          onClick={() => scrollTo("home")}
          className="font-mono text-lg font-bold tracking-tight hover:scale-105 transition-transform"
        >
          AMRISH<span className="text-blue-500">.DEV</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Amrish2501"
            target="_blank"
            className="rounded-full border border-blue-500/30 p-2 text-slate-300 transition hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/amrish-al"
            target="_blank"
            className="rounded-full border border-blue-500/30 p-2 text-slate-300 transition hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FaLinkedin size={17} />
          </a>
        </div>

        <button
          className="md:hidden text-blue-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-blue-500/20 bg-slate-950 px-6 py-5 md:hidden"
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full py-3 text-left text-slate-300 hover:text-blue-400"
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}