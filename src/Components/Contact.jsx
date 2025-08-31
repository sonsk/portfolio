import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center  rounded-2xl">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">🚀 Restons en contact</h2>
      <p className="text-gray-600 mb-10">
        Tu as un projet, une opportunité ou tu veux simplement discuter ?  
        Je suis toujours ouvert aux nouvelles collaborations.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <a
          href="mailto:sonfacksteve15@gmail.com"
          className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-blue-600 transition"
        >
          <Mail className="w-6 h-6 text-blue-500" />
          sonfacksteve15@gmail.com
        </a>

        {/* Téléphone */}
        <a
          href="tel:+16132977233"
          className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-green-600 transition"
        >
          <Phone className="w-6 h-6 text-green-500" />
          +1 613 297 7233
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-indigo-600 transition"
        >
          <Linkedin className="w-6 h-6 text-indigo-500" />
          Mon profil LinkedIn
        </a>
      </div>
    </div>
  );
}
