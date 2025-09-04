import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Shield, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
      >
        About Me
      </motion.h2>

      {/* Texte animé */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 leading-relaxed text-lg text-justify"
      >
        I'm a passionate <span className="font-semibold text-blue-600">full-stack web developer </span> 
        focused on building modern, efficient applications tailored to real user needs.
        Curious, detail-oriented, and always learning, I have a strong interest in{" "}
        <span className="font-semibold">web technologies</span>,{" "}
        <span className="font-semibold">cloud solutions</span>,{" "}
        <span className="font-semibold">artificial intelligence</span>, and{" "}
        <span className="font-semibold">cybersecurity</span>. 
        <br /> <br />
        Based in <span className="font-semibold text-blue-600">Ottawa, Canada</span>, 
        I’m available for both on-site and remote opportunities, 
        and always ready to take on new challenges 🚀.
      </motion.p>

      {/* Icônes illustratives */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Globe className="w-10 h-10 text-blue-600" />
          <p className="mt-2 text-gray-700 font-medium">Web Tech</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Cpu className="w-10 h-10 text-green-600" />
          <p className="mt-2 text-gray-700 font-medium">AI</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Shield className="w-10 h-10 text-red-600" />
          <p className="mt-2 text-gray-700 font-medium">Cybersecurity</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Sparkles className="w-10 h-10 text-yellow-500" />
          <p className="mt-2 text-gray-700 font-medium">Innovation</p>
        </motion.div>
      </div>
    </section>
  );
}
