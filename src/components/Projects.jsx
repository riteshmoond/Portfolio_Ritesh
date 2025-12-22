import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import img from "../assets/protfoliyo.png";

/* ================= DATA ================= */

const projects = [
  {
    image:
      "https://content.jdmagicbox.com/comp/ratlam/t9/9999p7412.7412.220516114212.v5t9/catalogue/-ocrplm1ru4.jpg",
    title: "Royal Wedding Studio",
    description:
      "A full-stack wedding studio website with booking system, admin dashboard, and Firebase integration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    live: "https://weding-studio.vercel.app/",
    github: "https://github.com/riteshmoond?tab=repositories",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MQlTlAwZ5t1rOH5QrTrg4N6xnorzaVxTjg&s",
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce application with product management, cart, and order system.",
    tech: ["React", "Express", "MongoDB", "Tailwind", "Node.js"],
    live: "https://uzeniio.onrender.com",
    github: "https://github.com/riteshmoond?tab=repositories",
  },
  {
    image:
      "https://images-platform.99static.com//fZCVJ3MiU_LXC7tdNW2XrK68W3I=/234x28:1064x858/fit-in/500x500/projects-files/174/17496/1749665/cd1ae10b-fe88-4880-b4a8-0f716f805bbc.jpg",
    title: "Dhobi.in",
    description:
      "An online laundry service platform where users can book pickup & delivery, choose services, and track orders in real-time.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    live: "https://dhobivala.vercel.app",
    github: "https://github.com/riteshmoond?tab=repositories",
  },
  {
    image: img,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website to showcase projects, skills, and experience with a modern UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://portfolio-ritesh-sage.vercel.app",
    github: "https://github.com/riteshmoond?tab=repositories",
  },
];

const fallbackImg =
  "https://via.placeholder.com/600x400?text=Project+Preview";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent">
          Projects
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl">
          A selection of projects showcasing my skills and experience
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -8 }}
            className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 transition hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Thumbnail */}
            <div className="relative h-40 rounded-xl mb-5 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                onError={(e) => (e.target.src = fallbackImg)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
