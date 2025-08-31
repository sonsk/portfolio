import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceCard({ role, company, period, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative pl-10 pb-10 border-l-2 border-gray-200"
    >
      {/* Icône à gauche */}
      <div className="absolute -left-4 top-0 bg-blue-500 text-white rounded-full p-2">
        <Briefcase className="w-4 h-4" />
      </div>

      {/* Contenu de l’expérience */}
      <h3 className="text-xl font-bold">{role}</h3>
      <span className="text-gray-500 text-sm">
        {company} | {period}
      </span>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}
