import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import img from "../config/profile.jpg";

export default function About() {
  const photoRef = useRef(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired && photoRef.current) {
          setFired(true);

          // 📍 photo ke center ka exact position
          const rect = photoRef.current.getBoundingClientRect();
          const x = (rect.left + rect.width / 2) / window.innerWidth;
          const y = (rect.top + rect.height / 2) / window.innerHeight;

          // 🎆 fire-cracker blast (photo ke upar)
          confetti({
            particleCount: 120,
            spread: 100,
            startVelocity: 45,
            origin: { x, y },
            colors: ["#ec4899", "#22d3ee", "#a855f7", "#f472b6"],
          });

          // 🎇 thoda sa second burst (natural feel)
          setTimeout(() => {
            confetti({
              particleCount: 70,
              spread: 140,
              startVelocity: 30,
              origin: { x, y },
              colors: ["#22d3ee", "#ec4899"],
            });
          }, 350);
        }
      },
      { threshold: 0.6 }
    );

    if (photoRef.current) observer.observe(photoRef.current);
    return () => observer.disconnect();
  }, [fired]);

  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-br bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – IMAGE CARD (same layout) */}
        <div className="flex justify-around lg:justify-center">
          <div
            ref={photoRef}
            className="relative rounded-full p-1 bg-gradient-to-br from-pink-500 to-cyan-400"
          >
            <div className="rounded-full overflow-hidden bg-gray-900">
              <img
                src={img}
                alt="Ritesh Moond"
                className="h-[300px] w-[300px] object-cover rounded-full"
              />
            </div>

            {/* glow ring (already tumhare theme me match karta hai) */}
            <div className="absolute inset-0 rounded-full border-2 border-pink-500/40 blur-md animate-pulse" />
          </div>
        </div>

        {/* RIGHT – CONTENT (unchanged) */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Who is{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Ritesh Moond
            </span>
            ?
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-cyan-400 rounded mt-6 mb-8" />

          <div className="space-y-5 text-gray-400 leading-relaxed max-w-xl">
            <p>
              I’m a{" "}
              <span className="text-white font-medium">MERN Stack Developer</span>{" "}
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
