import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Ritesh Moond</span>.  
          All rights reserved.
        </p>

        {/* Right - Socials */}
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-accent transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-accent transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:ritesh@email.com"
            className="hover:text-accent transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
