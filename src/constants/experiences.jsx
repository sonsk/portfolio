export const experiences = (t) => [
  {
    role: t("Experiences.Warehouse.Role", "Warehouse Associate"),
    company: t("Experiences.Warehouse.Company", "Amazon Delivery Center"),
    period: t("Experiences.Warehouse.Period", "Oct 2024 - Present"),
    description: [
      t("Experiences.Warehouse.Desc1", "Réception, tri et préparation des colis pour la livraison."),
      t("Experiences.Warehouse.Desc2", "Utilisation d'outils de gestion d'entrepôt pour assurer la traçabilité des produits."),
      t("Experiences.Warehouse.Desc3", "Respect strict des procédures de sécurité et de qualité.")
    ],
    outils: []
  },
  {
    role: t("Experiences.Orange.Role", "Full Stack Web Developer"),
    company: t("Experiences.Orange.Company", "Orange Cameroun"),
    period: t("Experiences.Orange.Period", "May 2024 - Sep 2024"),
    description: [
      t("Experiences.Orange.Desc1", "Développement d'applications web pour le département RH."),
      t("Experiences.Orange.Desc2", "Implémentation de solutions web full-stack avec PHP, React.js et Dotnet."),
      t("Experiences.Orange.Desc3", "Déploiement CI/CD via Azure DevOps et conteneurisation avec Docker."),
      t("Experiences.Orange.Desc4", "Mise en production sur RedHat OpenShift.")
    ],
    outils: ["ReactJs", "PHP", "Dotnet", "TailwindCss", "Azure DevOps", "Docker"]
  },
  {
    role: t("Experiences.Accent.Role", "Full Stack Web Developer"),
    company: t("Experiences.Accent.Company", "Accent Media"),
    period: t("Experiences.Accent.Period", "Oct 2022 - Apr 2024"),
    description: [
      t("Experiences.Accent.Desc1", "Conception et développement de solutions web avec Laravel et React.js."),
      t("Experiences.Accent.Desc2", "Analyse des besoins clients et optimisation des performances."),
      t("Experiences.Accent.Desc3", "Gestion de base de données MySQL et bonnes pratiques de versionning Git.")
    ],
    outils: ["ReactJs", "Laravel", "MySQL"]
  },
  {
    role: t("Experiences.WP.Role", "WordPress Developer"),
    company: t("Experiences.WP.Company", "Agence Web Solutions"),
    period: t("Experiences.WP.Period", "Jan 2019 - Sep 2022"),
    description: [
      t("Experiences.WP.Desc1", "Création et maintenance de sites vitrines et e-commerce avec WordPress."),
      t("Experiences.WP.Desc2", "Optimisation SEO, gestion de contenu et intégration de solutions de paiement.")
    ],
    outils: ["WordPress"]
  },
  {
    role: t("Experiences.Freelance.Role", "Freelance"),
    company: t("Experiences.Freelance.Company", "Turing"),
    period: t("Experiences.Freelance.Period", "Février 2022"),
    description: [],
    outils: []
  }
];
