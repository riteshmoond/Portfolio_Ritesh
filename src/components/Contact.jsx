import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-accent">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I’m open to full-time roles, freelance projects, and collaborations.
          If you have an idea or opportunity, feel free to reach out.
        </p>

        {/* Contact Card */}
        <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:ritesh@email.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 hover:bg-gray-800 transition"
            >
              <Mail className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">moondritesh41@gmail.com</p>
              </div>
            </a>

            {/* Phone / WhatsApp */}
            <a
              href="tel:+919257479576"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 hover:bg-gray-800 transition"
            >
              <Phone className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 9257479576</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 hover:bg-gray-800 transition"
            >
              <Linkedin className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-medium">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/riteshmoond"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 hover:bg-gray-800 transition"
            >
              <Github className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="font-medium">View my work</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="mailto:ritesh@email.com"
              className="inline-block px-8 py-4 rounded-xl bg-accent text-black font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition"
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
