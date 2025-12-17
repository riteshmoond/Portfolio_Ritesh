import {
  Server,
  Layout,
  GitBranch,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Layout size={22} />,
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Others",
    icon: <GitBranch size={22} />,
    skills: ["Git", "GitHub", "Vite", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-br from-[#12002f] via-[#0b1c3d] to-[#020617]"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          My <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Technologies and tools I use to design, develop, and ship production-ready applications
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-pink-500/60 to-cyan-400/60 hover:from-pink-500 hover:to-cyan-400 transition"
          >
            <div className="h-full rounded-2xl bg-gray-900/80 backdrop-blur border border-white/10 p-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 text-pink-400">
                {group.icon}
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-pink-400/60 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
