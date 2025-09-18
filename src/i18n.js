// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // charge les traductions depuis un serveur ou un chemin local
  .use(LanguageDetector) // détecte la langue de l'utilisateur
  .use(initReactI18next) // passe les traductions à React
  .init({
    fallbackLng: 'en', // langue par défaut
    debug: true, // activer les logs pour le débogage
    interpolation: {
      escapeValue: false, // React s'occupe déjà de l'échappement des valeurs
    },
    backend: {
      // Chemin des fichiers de traduction
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false, // désactiver la suspension pour éviter les erreurs
    },
  });

export default i18n;