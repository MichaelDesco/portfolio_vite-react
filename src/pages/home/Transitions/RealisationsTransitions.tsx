import React, { useMemo } from "react";
import TransitionList from "../../../components/TransitionList/TransitionList";

// Définition des paragraphes
const RealisationsTransitions: React.FC = () => {
  const paragraphs = useMemo(
    () => [
      `<h2 class="titleTransition">Patience</h2>
        <p>La programmation et la résolution de problèmes informatiques peuvent être frustrantes. Il est essentiel de rester calme et patient lorsqu'on est confronté à des difficultés.</p>`,

      `<h2 class="titleTransition">Autonomie</h2>
        <p>Les développeurs web doivent être capables de travailler de manière indépendante et prendre des initiatives pour résoudre des problèmes.</p>`,

      `<h2 class="titleTransition">Créativité</h2>
        <p>Être capable de penser de manière créative est essentiel pour concevoir des solutions innovantes et résoudre des problèmes complexes.</p>`,

      `<h2 class="titleTransition">Attention aux détails</h2>
        <p>Les petits détails peuvent avoir un impact important sur le fonctionnement d'un site web. Une grande attention aux détails est donc essentielle pour éviter les erreurs.</p>`,

      `<h2 class="titleTransition">Esprit d'équipe</h2>
        <p>Travailler en équipe est souvent nécessaire pour développer des projets web. Savoir collaborer, écouter les autres et communiquer efficacement est donc important.</p>`,

      `<h2 class="titleTransition">Flexibilité</h2>
        <p>Le domaine du développement web évolue rapidement, et il est essentiel d'être ouvert au changement et de s'adapter aux nouvelles technologies et méthodes.</p>`,

      `<h2 class="titleTransition">Gestion du temps</h2>
        <p>Les développeurs web doivent être capables de gérer leur temps efficacement pour respecter les délais et les priorités.</p>`,

      `<h2 class="titleTransition">Communication</h2>
        <p>La capacité à communiquer clairement, que ce soit avec des collègues, des clients ou des utilisateurs, est cruciale.</p>`,

      `<h2 class="titleTransition">Respect des normes et des bonnes pratiques</h2>
        <p>Un bon développeur web doit être soucieux de la qualité du code, du respect des normes de l'industrie et de l'adoption des bonnes pratiques de développement.</p>`,

      `<h2 class="titleTransition">Curiosité</h2>
        <p>La technologie évolue rapidement, et les développeurs web doivent être curieux et désireux d'apprendre constamment de nouvelles choses.</p>`,

      `<h2 class="titleTransition">Résolution de problèmes</h2>
        <p>La capacité à identifier, analyser et résoudre des problèmes est au cœur du travail d'un développeur web.</p>`,

      `<h2 class="titleTransition">Éthique professionnelle</h2>
        <p>Les développeurs web doivent faire preuve d'intégrité, respecter les normes de confidentialité et traiter éthiquement les données des utilisateurs.</p>`,

      `<h2 class="titleTransition">Gestion du stress</h2>
        <p>Le développement web peut être stressant, en particulier lorsque des délais sont serrés. Savoir gérer le stress est essentiel pour maintenir la qualité du travail.</p>`,

      `<h2 class="titleTransition">Adaptabilité</h2>
        <p>Être capable de s'adapter à différents projets, langages de programmation et technologies est important pour rester compétitif.</p>`,

      `<h2 class="titleTransition">Orientation utilisateur</h2>
        <p>Garder à l'esprit les besoins et les expériences des utilisateurs finaux lors du développement est essentiel pour créer des sites web conviviaux.</p>`,
    ],
    []
  );

  return <TransitionList items={paragraphs} intervalTime={6000} />;
};

export default RealisationsTransitions;
