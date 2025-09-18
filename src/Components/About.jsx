import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Shield, Sparkles } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";


export default function About() {
  const { t }= useTranslation();
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
      >
      {t('About.About')}
      </motion.h2>

      {/* Texte animé */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 leading-relaxed text-lg text-left"
      >
        
       <Trans
          i18nKey="About.Description"
          components={[
            <br />, // 0
            <span className="font-semibold text-blue-600" />, // 1
            <span className="font-semibold" />, // 2
            <span className="font-semibold" />, // 3
            <span className="font-semibold" />, // 4
            <span className="font-semibold" />, // 5
            <span className="font-semibold text-blue-600" /> // 6
          ]}
        />
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
