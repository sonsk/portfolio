import React, { useState } from "react";
import { motion } from "framer-motion";
import SaasCard from "../constants/SaasCard";
import { Layers } from "lucide-react";
import { saasList } from "../constants/saasList";
import GenericModal from "../constants/GenericModal";
import { useTranslation } from "react-i18next";

export default function SaaS() {
  const { t } = useTranslation();
  const [selectedSaaS, setSelectedSaaS] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        🖥️ {t("Saas.Title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 mb-10 text-center"
      >
       
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {saasList.map((saas, index) => (
          <SaasCard key={index} saas={saas} index={index} onSelect={setSelectedSaaS} />
        ))}
      </div>

      <GenericModal item={selectedSaaS} isOpen={!!selectedSaaS} onClose={() => setSelectedSaaS(null)} />
    </div>
  );
}
