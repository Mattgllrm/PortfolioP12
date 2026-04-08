import ohmyfoodCover2 from "../assets/ohmyfood-cover2.png";
import ohmyfood2 from "../assets/ohmyfood2.png";
import ohmyfood3 from "../assets/ohmyfood3.png";
import ohmyfood4 from "../assets/ohmyfoodCover1.webp";
import sophiebluelcover from "../assets/sophie-bluelcover.png";
import argentbankcover from "../assets/argentbankcover.webp";
import menumakercover from "../assets/Menumakercover.webp";
import argentbankdetail from "../assets/argentbankdetail.png";
import argentbankgallery1 from "../assets/argentbankgallery1.png";
import argentbankgallery2 from "../assets/argentbankgallery2.png";
import qwentadetail from "../assets/qwentadetail.png";
import qwentagallery from "../assets/qwentagallery.png";
import qwentagallery2 from "../assets/qwentagallery2.png";
import sophieb2 from "../assets/sophieb2.png";
import sophieb3 from "../assets/sophieb3.png";
import sophieb1 from "../assets/sophieb1.png";

const projects = [
  {
    id: 1,
    slug: "ohmyfood",
    title: "Ohmyfood",
    category: "UI / HTML / CSS",

    description:
      "Développement d’une interface mobile-first pour une application de commande de restaurants gastronomiques, avec animations CSS avancées et attention particulière portée à l’expérience utilisateur.",

    tags: ["HTML5", "SCSS", "CSS Animations", "Responsive Design", "Mobile-first"],

    github: "https://github.com/Mattgllrm/OhMyfood",
    demo: "https://mattgllrm.github.io/OhMyfood/",
    role: "Intégration front-end",

    highlights: [
      "Intégration à partir de maquettes Figma",
      "Animations 100% CSS (keyframes, transitions, transformations)",
      "Architecture SCSS modulaire et maintenable",
      "Approche mobile-first avec adaptation tablette et desktop",
      "Respect des bonnes pratiques d’accessibilité HTML",
    ],

    image: ohmyfood4,
    cover: ohmyfoodCover2,
    gallery: [ohmyfood3, ohmyfood2],

   
    sections: {
      contexte:
        "Projet réalisé dans le cadre de la formation OpenClassrooms. L’objectif était d’intégrer l’interface d’une application de commande de restaurants gastronomiques à partir de maquettes fournies par un UX designer, dans une logique de production professionnelle simulée.",

      objectifs:
        "Développer un site en mobile-first fidèle aux maquettes, intégrer des animations CSS avancées sans JavaScript et garantir une expérience fluide sur mobile, tablette et desktop.",

      stack:
        "HTML5, SCSS (SASS), CSS3 (animations, keyframes, transitions), méthodologie mobile-first, Figma.",

      competences:
        "Intégration pixel-perfect, structuration SCSS modulaire, gestion d’animations performantes, organisation du code, respect des standards d’accessibilité et optimisation responsive.",

      resultats:
        "Site responsive fonctionnel respectant les maquettes et les contraintes imposées. Les animations améliorent l’expérience utilisateur tout en conservant de bonnes performances.",

      ameliorations:
        "Évolution possible vers une version dynamique avec JavaScript pour gérer la sélection des menus et enrichir l’interactivité utilisateur.",
    },
  },

 {
  id: 2,
  slug: "sophie-bluel",
  title: "Sophie Bluel",
  category: "JavaScript",

  description:
    "Dynamisation d’un site vitrine en JavaScript : contenu chargé depuis une API, authentification et interface d’administration pour gérer les projets.",

  tags: ["JavaScript", "DOM", "API REST", "Auth (token)", "CRUD", "Modale"],

  github: "https://github.com/Mattgllrm/Sophie_Bluel_JS_MatthisGuillerm",
  demo: "",
  role: "Développement JavaScript",

  highlights: [
    "Rendu dynamique de la galerie à partir des données API",
    "Authentification avec token stocké en localStorage",
    "Mode administrateur : ajout / suppression de projets (CRUD)",
    "Modale d’admin avec upload d’image et validation de formulaire",
    "Gestion des erreurs et retours utilisateur (succès / échec)",
  ],

  image: sophiebluelcover,
  cover: sophieb1,
  gallery: [sophieb2, sophieb3],

  sections: {
    contexte:
      "Projet réalisé dans le cadre de la formation OpenClassrooms. L’objectif était de transformer un site vitrine statique d’architecte d’intérieur en application dynamique connectée à une API, avec un espace administrateur.",

    objectifs:
      "Afficher dynamiquement les projets via l’API, mettre en place une authentification sécurisée, puis permettre à un utilisateur admin de gérer les contenus (ajout/suppression) via une interface dédiée.",

    stack:
      "JavaScript, DOM, Fetch API, API REST, authentification par token (localStorage), modale UI, HTML/CSS existants.",

    competences:
      "Manipulation du DOM, gestion d’événements, appels API asynchrones, authentification (token), gestion de formulaires (validation + upload), organisation du code et gestion des erreurs côté front.",

    resultats:
      "Site vitrine rendu interactif : galerie synchronisée avec l’API et mode administrateur permettant d’ajouter ou supprimer des projets via une modale, sans rechargement de page.",

    ameliorations:
      "Renforcer l’accessibilité de la modale (focus trap, navigation clavier), améliorer la sécurité (expiration token, messages d’erreur), et optimiser l’UX avec des confirmations et états de chargement plus détaillés.",
  },
}
,

  {
  id: 3,
  slug: "argent-bank",
  title: "Argent Bank",
  category: "React / Redux Toolkit / API",

  description:
    "Développement du front-end d’une application bancaire moderne avec authentification sécurisée, gestion d’état global via Redux Toolkit et communication avec une API REST.",

  tags: [
    "React",
    "Redux Toolkit",
    "API REST",
    "Auth (token)",
    "Swagger"
  ],

  github: "https://github.com/Mattgllrm/ArgentBank_Frontend",
  demo: "",
  role: "Front-end React",

  highlights: [
    "Authentification utilisateur avec stockage sécurisé du token en sessionStorage",
    "Gestion de l’état global avec Redux Toolkit (slice, store, async thunk)",
    "Communication avec l’API via fetch (requêtes protégées)",
    "Édition dynamique du profil utilisateur (formulaire contrôlé)",
    "Architecture React modulaire et maintenable",
  ],

  image: argentbankcover,
  cover: argentbankdetail,
  gallery: [argentbankgallery1, argentbankgallery2],

  sections: {
    contexte:
      "Projet réalisé dans le cadre de la formation OpenClassrooms. L’objectif était de développer le front-end d’une application bancaire en se connectant à une API existante documentée via Swagger.",

    objectifs:
      "Mettre en place un système d’authentification sécurisé, centraliser les données utilisateur dans un état global fiable, puis permettre la consultation et la modification du profil via une interface React moderne.",

    stack:
      "React, Redux Toolkit (createSlice, configureStore, createAsyncThunk), fetch API, sessionStorage (gestion du token), API REST, Swagger.",

    competences:
      "Architecture front-end avec React, gestion d’état global avancée avec Redux Toolkit, appels API asynchrones, sécurisation via token, gestion de formulaires contrôlés et structuration propre des composants.",

    resultats:
      "Application fonctionnelle avec authentification, récupération sécurisée des données utilisateur et mise à jour du profil via un flux Redux clair et maintenable.",

    ameliorations:
      "Implémenter la gestion complète des transactions côté front, ajouter des loaders et messages d’erreur plus détaillés, améliorer la persistance sécurisée et optimiser les performances avec memoization.",
  },
}
,

  {
  id: 4,
  slug: "menu-maker",
  title: "Menu Maker",
  category: " Gestion de projet / Conception produit",

  description:
    "Cadrage complet d’un outil de création de menus pour restaurateurs : analyse des besoins, backlog, sprints Scrum et rédaction des spécifications fonctionnelles et techniques.",

  tags: [
    "Scrum",
    "User Stories",
    "Spécifications",
    "Kanban",
    "Veille"
  ],

  github: "https://github.com/dashboard",
  demo: "",
  role: "Cadrage produit & choix techniques",

  highlights: [
    "Analyse du besoin et traduction en user stories priorisées (P1/P2/P3)",
    "Construction du product backlog et planification en sprints (Scrum)",
    "Mise en place d’un Kanban sur Notion pour le suivi",
    "Rédaction des spécifications (fonctionnelles + techniques) pour cadrer le développement",
    "Proposition de stack : React + Firebase (Auth/Firestore) avec approche NoSQL",
  ],

  image: menumakercover,
  cover: qwentadetail,
  gallery: [qwentagallery, qwentagallery2],

  sections: {
    contexte:
      "Projet réalisé dans le cadre de la formation OpenClassrooms. L’objectif était de cadrer la création de Menu Maker, un outil destiné aux restaurateurs pour concevoir, personnaliser et publier leurs menus facilement.",

    objectifs:
      "Structurer le projet de bout en bout : comprendre les besoins, définir les fonctionnalités prioritaires, organiser la roadmap en sprints et produire une documentation claire pour lancer le développement.",

    stack:
      "Front : React. Back-end : Firebase (Auth + Firestore). Base de données : NoSQL (Firestore). Auth : Magic Link / JWT (selon besoin). Outils : Notion (Kanban), veille et documentation.",

    competences:
      "Analyse produit, rédaction de user stories et critères d’acceptation, priorisation par valeur, planification Scrum (sprints/rituels), rédaction de spécifications fonctionnelles et techniques, choix d’architecture et justification des décisions.",

    resultats:
      "Livrables prêts pour une équipe de dev : backlog priorisé, organisation en sprints, Kanban de suivi, spécifications exploitables et proposition de stack cohérente avec les contraintes du produit.",

    ameliorations:
      "Affiner la sécurité et les droits (rôles), détailler les règles Firestore, ajouter un schéma d’architecture plus complet et prévoir une API Node/Express si des besoins spécifiques apparaissent à terme.",
  },
}
,
];

export default projects;
