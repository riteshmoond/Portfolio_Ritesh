import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";

const Typewriter = ({ text }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setValue(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {value}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function WelcomeScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onFinish(), 600);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow background */}
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative text-center max-w-xl px-6">
            {/* Icons */}
            <motion.div
              className="flex justify-center gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[Code2, User, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur"
                >
                  <Icon className="text-cyan-400 w-6 h-6" />
                </div>
              ))}
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
                <span className="text-gray-400">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ritesh Moond
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-gray-400 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              MERN Stack Developer
            </motion.p>

            {/* Website */}
            <motion.div
              className="inline-flex items-center gap-2 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Globe className="text-cyan-400 w-5 h-5" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <Typewriter text="riteshmoond.dev" />
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
