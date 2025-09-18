import React, { useState } from "react";
import ProjectCard from "../constants/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../constants/projects";
import GenericModal from "../constants/GenericModal";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        💻 {t("Projects.Title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 mb-10 text-center"
      >
        {/* {t(
          "Projects.Intro",
          "Voici une sélection de mes réalisations en développement web et applications."
        )} */}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <GenericModal
        item={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
