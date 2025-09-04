import React, { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col items-center">
        {/* Nom + rôle */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center tracking-wide">
          STEVE SONFACK KEMDONG
        </h1>
        <p className="mt-2 text-gray-600 font-medium text-lg md:text-2xl text-center">
          FULL-STACK WEB DEVELOPER
        </p>

        {/* Message construction */}
        <div className="mt-4 px-4 py-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-lg text-center shadow-sm">
          🚧 This site is still under construction. <br />
          <a
            href="https://sonsk.github.io/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 font-semibold hover:text-blue-800"
          >
            See the previous version of the portfolio
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-6 w-full">
          {/* Mobile */}
          <div className="md:hidden flex flex-col items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg shadow font-semibold hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
            {menuOpen && (
              <ul className="mt-3 bg-white border rounded-lg shadow w-40 text-center animate-fadeIn">
                {[
                  { to: "/", label: "Accueil" },
                  { to: "/projects", label: "Projets" },
                  { to: "/saas", label: "Saas" },
                  { to: "/contact", label: "Contact" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="py-2 hover:bg-gray-100 transition cursor-pointer"
                  >
                    <Link to={item.to} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop */}
          <ul className="hidden md:flex justify-center space-x-10 text-lg mt-4">
            {[
              { to: "/", label: "Accueil" },
              { to: "/projects", label: "Projets" },
              { to: "/saas", label: "Saas" },
              { to: "/contact", label: "Contact" },
            ].map((item, i) => (
              <li key={i} className="relative group cursor-pointer">
                <Link to={item.to} className="text-gray-700 hover:text-blue-600 transition">
                  {item.label}
                </Link>
                {/* Soulignement animé */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
