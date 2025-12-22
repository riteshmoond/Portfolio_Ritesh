import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiPython,
  SiNextdotjs,
  SiFigma,
 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React JS", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Mongo DB", icon: <SiMongodb className="text-green-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-b from-[#050b2c] via-[#081a4b] to-[#0b2a6f]"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-yellow-400">Skills</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
          Writing code using languages & tools like HTML, CSS, JavaScript, React,
          Node.js, MongoDB, Tailwind CSS, Python, and modern UI tools.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-[#0d1b4c]/80 backdrop-blur
              border border-white/10
              rounded-xl p-6
              flex flex-col items-center justify-center
              text-center
              shadow-[0_8px_20px_rgba(0,0,0,0.35)]
              hover:-translate-y-2
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
              transition
            "
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
