import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Hi, I’m{" "}
          <span className="text-accent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
            Ritesh Moond
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          MERN Stack Developer crafting fast, scalable & modern web applications
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition"
          >
            View Resume <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-accent text-accent hover:bg-accent/10 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-accent hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-accent hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:ritesh@email.com"
            className="hover:text-accent hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
