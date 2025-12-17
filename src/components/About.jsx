import img from "../config/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-br from-[#12002f] via-[#0b1c3d] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE CARD (Hero style) */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-pink-500 to-cyan-400">
            <div className="rounded-3xl overflow-hidden bg-gray-900">
              <img
                src={img}
                alt="Ritesh Moond"
                className="h-[420px] w-[320px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          {/* Section Label */}
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Who is{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Ritesh Moond
            </span>
            ?
          </h2>

          {/* Divider */}
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-cyan-400 rounded mt-6 mb-8" />

          {/* Text */}
          <div className="space-y-5 text-gray-400 leading-relaxed max-w-xl">
            <p>
              I’m a <span className="text-white font-medium">MERN Stack Developer</span>{" "}
              who enjoys building{" "}
              <span className="text-pink-400 font-medium">
                scalable, modern web applications
              </span>{" "}
              with a strong focus on performance and clean UI.
            </p>

            <p>
              My primary tools include{" "}
              <span className="text-white">React, Tailwind CSS</span>{" "}
              on the frontend and{" "}
              <span className="text-white">Node.js, Express & MongoDB</span>{" "}
              on the backend.
            </p>

            <p>
              I aim to create products that feel smooth, intuitive, and
              production-ready from both a user and developer perspective.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 text-center">
              <h4 className="text-2xl font-bold text-pink-400">10+</h4>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 text-center">
              <h4 className="text-2xl font-bold text-pink-400">MERN</h4>
              <p className="text-sm text-gray-400">Stack</p>
            </div>
            <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4 text-center">
              <h4 className="text-2xl font-bold text-pink-400">UI/UX</h4>
              <p className="text-sm text-gray-400">Focus</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
