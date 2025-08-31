import { motion } from "framer-motion";
import ExperienceCard from "../constants/ExperienceCard";
import { experiences } from "../constants/experiences";

export default function Experiences() {

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        🧑‍💻 Mon Parcours
      </motion.h2>

      {/* Timeline */}
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} index={i} {...exp} />
      ))}
    </div>
  );
}
