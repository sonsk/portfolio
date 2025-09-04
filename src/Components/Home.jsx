import { motion } from "framer-motion";
import { User, Code, Folder, Briefcase, BadgeCheck, Clock, Layers } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const items = [
    { to: "/about", icon: <User size={40} />, label: "About", color: "from-green-400 to-emerald-600" },
    { to: "/techs", icon: <Code size={40} />, label: "Techs", color: "from-red-400 to-pink-600" },
    { to: "/projects", icon: <Folder size={40} />, label: "Projects", color: "from-purple-400 to-indigo-600" },
    { to: "/experiences", icon: <Briefcase size={40} />, label: "Experience", color: "from-blue-400 to-cyan-600" },
    { to: "/certifications", icon: <BadgeCheck size={40} />, label: "Certifications", color: "from-yellow-400 to-orange-600" },
    { to: "/in-progress", icon: <Clock size={40} />, label: "In Progress", color: "from-gray-400 to-gray-600" },
    { to: "/saas", icon: <Layers size={40} />, label: "SaaS", color: "from-purple-400 to-pink-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-2">👋 Hi, I'm Steve</h1>
        <p className="text-lg text-gray-600">Full-Stack Developer | Cybersecurity Enthusiast</p>
      </motion.div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {items.map((item, i) => (
          <Link key={i} to={item.to}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className={`flex flex-col items-center justify-center h-40 bg-gradient-to-br ${item.color} text-white rounded-2xl shadow-lg p-6`}
            >
              {item.icon}
              <p className="mt-3 font-semibold">{item.label}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
