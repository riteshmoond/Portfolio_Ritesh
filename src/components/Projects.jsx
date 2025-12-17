import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Royal Wedding Studio",
    description:
      "A full-stack wedding studio website with booking system, admin dashboard, and Firebase integration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Socket.io based real-time chat application with authentication and chat history.",
    tech: ["React", "Node.js", "Socket.io"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce application with product management, cart, and order system.",
    tech: ["React", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-accent">
          Projects
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl">
          A selection of projects showcasing my skills and experience
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Thumbnail */}
            <div className="h-40 bg-gray-800 rounded-xl mb-5 flex items-center justify-center text-gray-500 text-sm">
              Project Preview
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
