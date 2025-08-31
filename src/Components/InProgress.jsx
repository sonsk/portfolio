// Exemple d'utilisation dans InProgress.jsx
import React from 'react'
import { inProgress } from '../constants/inprogress'

export default function InProgress() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h2 className='font-bold text-4xl mb-8'>En cours</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {inProgress.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <img src={item.img} alt={item.name} className="w-20 h-20 object-contain mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-center">{item.name}</h3>
            <p className="text-gray-500 text-center">{item.desc}</p>
            {item.url && item.url !== "#" && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2"
              >
                Voir plus
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}