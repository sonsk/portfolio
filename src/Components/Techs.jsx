import React from 'react'
import { useTranslation } from "react-i18next";
import { techs as getTechs } from '../constants/techs'

export default function Techs() {
  const { t } = useTranslation();
  const techs = getTechs(t);

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h2 className='font-bold text-4xl mb-8'>{t("Techs.Title", "All technologies I use")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {techs.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain mb-4" />
            <h3 className="font-semibold text-xl mb-2">{tech.name}</h3>
            <p className="text-gray-500 text-center">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
