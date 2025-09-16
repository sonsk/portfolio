import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center rounded-2xl">
      <h2 className="text-4xl font-bold mb-6">🚀 Restons en contact</h2>
      <p className="text-gray-600 mb-10">
        Tu as un projet, une opportunité ou tu veux simplement discuter ?  
        Je suis toujours ouvert aux nouvelles collaborations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Email */}
        <a
          href="mailto:sonfacksteve15@gmail.com"
          className="flex flex-col items-center gap-2 text-lg text-gray-700 hover:text-blue-600 transition"
        >
          <Mail className="w-8 h-8 text-blue-500" />
          <span>sonfacksteve15@gmail.com</span>
        </a>

        {/* Téléphone */}
        <a
          href="tel:+16132977233"
          className="flex flex-col items-center gap-2 text-lg text-gray-700 hover:text-green-600 transition"
        >
          <Phone className="w-8 h-8 text-green-500" />
          <span>+1 613 297 7233</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/steve-sonfack-kemdong/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-lg text-gray-700 hover:text-indigo-600 transition"
        >
          <Linkedin className="w-8 h-8 text-indigo-500" />
          <span>Mon profil LinkedIn</span>
        </a>

        {/* Github */}
        <a
          href="https://github.com/sonsk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-lg text-gray-700 hover:text-black transition"
        >
          <Github className="w-8 h-8 text-black" />
          <span>Mon profil Github</span>
        </a>
      </div>
    </div>
  );
}
