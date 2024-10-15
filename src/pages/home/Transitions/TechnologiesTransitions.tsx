import React, { useMemo } from "react";
import TransitionList from "../../../components/TransitionList/TransitionList";

const TechnologiesTransitions: React.FC = () => {
  const paragraphs = useMemo(
    () => [
      `<h2 class="titleTransition">Langages de programmation</h2>
    <p class="descriptionTransition">Maîtrise des langages de programmation web tels que HTML, CSS, JavaScript. Connaissance d'autres langages comme Python, Ruby, PHP, etc., selon les besoins du projet.</p>`,

      `<h2 class="titleTransition">Frameworks et bibliothèques</h2>
    <p class="descriptionTransition">Utilisation de frameworks et de bibliothèques populaires tels que React, Angular, Vue.js pour le développement front-end. Utilisation de frameworks back-end tels que Node.js, Ruby on Rails, Django, Laravel, etc.</p>`,

      `<h2 class="titleTransition">Conception responsive</h2>
    <p class="descriptionTransition">Capacité à créer des sites web qui s'adaptent aux différentes tailles d'écran (mobiles, tablettes, ordinateurs de bureau).</p>`,

      `<h2 class="titleTransition">Base de données</h2>
    <p class="descriptionTransition">Conception de bases de données et utilisation de systèmes de gestion de bases de données (SGBD) tels que MySQL, PostgreSQL, MongoDB, etc.</p>`,

      `<h2 class="titleTransition">Conception et architecture logicielle</h2>
    <p class="descriptionTransition">Compréhension des principes de conception de logiciels et d'architecture MVC (Modèle-Vue-Contrôleur) ou d'autres architectures similaires.</p>`,

      `<h2 class="titleTransition">Gestion de versions</h2>
    <p class="descriptionTransition">Utilisation de systèmes de gestion de versions tels que Git pour le suivi des modifications du code source.</p>`,

      `<h2 class="titleTransition">Sécurité</h2>
    <p class="descriptionTransition">Connaissance des meilleures pratiques de sécurité web pour protéger les applications contre les attaques et les failles de sécurité.</p>`,

      `<h2 class="titleTransition">Optimisation des performances</h2>
    <p class="descriptionTransition">Capacité à optimiser la vitesse de chargement des pages web en minimisant les requêtes HTTP, en utilisant la mise en cache, etc.</p>`,

      `<h2 class="titleTransition">Intégration de services tiers</h2>
    <p class="descriptionTransition">Intégration de services externes tels que les API REST pour l'accès aux données ou d'autres fonctionnalités.</p>`,

      `<h2 class="titleTransition">Débogage et tests</h2>
    <p class="descriptionTransition">Compétences en débogage de code pour identifier et résoudre les problèmes. Réalisation de tests unitaires, tests d'intégration et tests fonctionnels.</p>`,

      `<h2 class="titleTransition">Automatisation</h2>
    <p class="descriptionTransition">Utilisation d'outils d'automatisation tels que Webpack, Gulp, ou Grunt pour simplifier les tâches répétitives.</p>`,

      `<h2 class="titleTransition">Connaissances en SEO</h2>
    <p class="descriptionTransition">Compréhension des principes de base du référencement (SEO) pour optimiser la visibilité des sites web dans les moteurs de recherche.</p>`,

      `<h2 class="titleTransition">Gestion de projet</h2>
    <p class="descriptionTransition">Capacité à travailler avec des méthodologies de gestion de projet telles que Scrum ou Agile.</p>`,

      `<h2 class="titleTransition">Collaboration et communication</h2>
    <p class="descriptionTransition">Capacité à travailler en équipe, à communiquer efficacement avec les membres de l'équipe, les clients et les utilisateurs.</p>`,

      `<h2 class="titleTransition">Veille technologique</h2>
    <p class="descriptionTransition">Maintien d'une veille technologique constante pour rester à jour avec les dernières tendances et les évolutions de l'industrie.</p>`,

      `<h2 class="titleTransition">Documentation</h2>
    <p class="descriptionTransition">Documentation claire et concise du code, des fonctionnalités et des processus pour faciliter la maintenance et la collaboration.</p>`,

      `<h2 class="titleTransition">Déploiement</h2>
    <p class="descriptionTransition">Déploiement de sites web sur des serveurs en utilisant des technologies telles que AWS, Heroku, ou des serveurs web traditionnels.</p>`,

      `<h2 class="titleTransition">Analyse et résolution de problèmes</h2>
    <p class="descriptionTransition">Compétence pour diagnostiquer et résoudre efficacement les problèmes techniques qui se posent.</p>`,

      `<h2 class="titleTransition">Connaissance des normes et réglementations</h2>
    <p class="descriptionTransition">Respect des normes de l'industrie et des réglementations en matière d'accessibilité, de confidentialité des données, etc.</p>`,

      `<h2 class="titleTransition">Créativité et convivialité</h2>
    <p class="descriptionTransition">Capacité à apporter une touche créative à la conception tout en maintenant une expérience utilisateur intuitive et conviviale.</p>`,
    ],
    []
  );

  return (
    <TransitionList
      items={paragraphs}
      intervalTime={6000}
      useQuotesTransition={false}
    />
  );
};

export default TechnologiesTransitions;
