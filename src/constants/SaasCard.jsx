import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function SaasCard({ saas, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
      onClick={() => onSelect(saas)}
    >
      <div className={`p-6 bg-gradient-to-br ${saas.color} text-white flex flex-col items-center justify-center`}>
        <Layers size={40} />
        <h3 className="text-xl font-bold mt-4">{saas.title}</h3>
        <p className="text-sm mt-2 text-center">{saas.shortDesc}</p>
        
         <div className="flex gap-3 mt-4">
            {saas.demoLink && (
              <a
                href={saas.demoLink}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold bg-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-500 transition"
              >
                <ExternalLink className="w-4 h-4" /> Démo
              </a>
            )}
            {saas.githubLink && (
              <a
                href={saas.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold bg-gray-700 px-4 py-2 rounded-full shadow hover:bg-gray-600 transition"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
      </div>
    </motion.div>
  );
}
