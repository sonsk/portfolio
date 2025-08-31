import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, image, techs, demoLink, githubLink, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="relative w-full max-w-md mx-auto bg-gray-800 text-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
    >
      {/* Image de fond */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-full h-full bg-black/40 flex flex-col justify-end p-6 transition-all group hover:bg-black/30">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
         {/* <p className="text-gray-200 text-sm mb-4 line-clamp-3">{description}</p> */}

          <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold bg-white/20 rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold bg-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-500 transition"
              >
                <ExternalLink className="w-4 h-4" /> Démo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold bg-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-600 transition"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
