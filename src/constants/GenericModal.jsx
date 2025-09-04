import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

export default function GenericModal({ item, isOpen, onClose }) {
  if (!isOpen || !item) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
        )}

        <p className="text-gray-600 mb-4">{item.description}</p>

        {item.techs && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-2">
          {item.demoLink && (
            <a
              href={item.demoLink}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Démo
            </a>
          )}
          {item.githubLink && (
            <a
              href={item.githubLink}
              target="_blank"
              className="flex items-center gap-2 text-gray-700 hover:underline"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
