import React from 'react'
import { certifications } from '../constants/certifications'

export default function Certifications() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h2 className='font-bold text-4xl mb-8'>Mes certifications</h2>
      {/* <a href="https://www.credly.com/users/steve-sonfack-kemdong" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-4">
        Voir toutes mes certifications sur Credly
      </a> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <img src={cert.img} alt={cert.name} className="w-20 h-20 object-contain mb-4" />
            <h3 className="font-semibold text-xl text-center mb-2">{cert.name}</h3>
            {/* <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2"
            >
              Vérifier l’authenticité
            </a> */}
          </div>
        ))}
      </div>
    </div>
  )
}