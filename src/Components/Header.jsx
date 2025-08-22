import React , { useState } from 'react'
import { Link } from 'react-router'
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-full md:w-3/6 mx-auto pt-5 border-2 border-red-200'>
        <header className="items-center p-5 ">
            <h1 className=" text-3xl md:text-5xl font-semi-bold text-center text-gray-800">
                STEVE SONFACK KEMDONG
            </h1>
            <p className='pt-5 text-gray-500 font-semi-bold text-2xl md:text-3xl text-center'>FULL-STACK WEB DEVELOPER</p>
            <p className="pt-5 font-light mx-auto text-justify">
                I'm a passionate full-stack web developer focused on building modern, efficient applications tailored to real user needs.
                Curious, detail-oriented, and always learning, I have a strong interest in web technologies, cloud solutions, artificial intelligence and cybersecurity.
                Based in Ottawa-Canada, I’m available for both on-site and remote opportunities, and always ready to take on new challenges.
            </p>

        {/* Navigation */}
        <nav className="mt-6">
          {/* Dropdown for small screens */}
          <div className="md:hidden flex flex-col items-center">
            <button
              className="px-4 py-2 bg-gray-200 rounded shadow font-semibold"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu
            </button>
            {menuOpen && (
              <ul className="mt-2 bg-white border rounded shadow w-40 text-center">
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/projets" onClick={() => setMenuOpen(false)}>Projets</Link>
                </li>
                <li className="py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </li>
              </ul>
            )}
          </div>
          {/* Horizontal menu for medium+ screens */}
          <ul className="hidden md:flex justify-center space-x-8 mt-4">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Accueil</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/projects">Projets</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        </header>
    </div>
  )
}
