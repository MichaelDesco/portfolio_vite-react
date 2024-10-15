import React, { useMemo } from "react";
import TransitionList from "../../../components/TransitionList/TransitionList";

// Définition des paragraphes
const LangagesTransitions: React.FC = () => {
  const paragraphs = useMemo(
    () => [
      `<h2 class="titleTransition">JavaScript</h2>
      <p class="descriptionTransition">Un langage de script largement utilisé pour la programmation web, permettant d'ajouter des fonctionnalités interactives aux sites web.</p>`,

      `<h2 class="titleTransition">Python</h2>
      <p class="descriptionTransition">Un langage polyvalent, facile à apprendre, apprécié pour sa lisibilité. Il est utilisé pour le développement web, l'analyse de données, l'automatisation et bien plus encore.</p>`,

      `<h2 class="titleTransition">Java</h2>
      <p class="descriptionTransition">Un langage orienté objet utilisé pour développer des applications d'entreprise, des applications Android et des systèmes embarqués.</p>`,

      `<h2 class="titleTransition">C++</h2>
      <p class="descriptionTransition">Une extension du langage C, il est principalement utilisé pour le développement de jeux, de logiciels système et d'applications performantes.</p>`,

      `<h2 class="titleTransition">C# (C-sharp)</h2>
      <p class="descriptionTransition">Un langage développé par Microsoft, utilisé pour le développement d'applications Windows, de jeux vidéo avec Unity et de logiciels d'entreprise.</p>`,

      `<h2 class="titleTransition">Ruby</h2>
      <p class="descriptionTransition">Connu pour sa simplicité et sa lisibilité, Ruby est souvent utilisé pour le développement web grâce au framework Ruby on Rails.</p>`,

      `<h2 class="titleTransition">PHP</h2>
      <p>Un langage de script côté serveur utilisé pour le développement web dynamique, souvent en conjonction avec des bases de données.</p>`,

      `<h2 class="titleTransition">Swift</h2>
      <p class="descriptionTransition">Développé par Apple, Swift est utilisé pour créer des applications iOS, macOS, watchOS et tvOS.</p>`,

      `<h2 class="titleTransition">Kotlin</h2>
      <p class="descriptionTransition">Un langage de programmation moderne utilisé pour le développement d'applications Android, en complément ou à la place de Java.</p>`,

      `<h2 class="titleTransition">R</h2>
      <p class="descriptionTransition">Un langage spécialisé dans l'analyse statistique et la visualisation de données.</p>`,

      `<h2 class="titleTransition">Go (ou Golang)</h2>
      <p class="descriptionTransition">Créé par Google, Go est apprécié pour sa vitesse et sa simplicité, principalement utilisé pour le développement de systèmes et d'applications réseau.</p>`,

      `<h2 class="titleTransition">Perl</h2>
      <p class="descriptionTransition">Un langage polyvalent utilisé pour le traitement de texte, la gestion de fichiers et d'autres tâches administratives.</p>`,

      `<h2 class="titleTransition">Scala</h2>
      <p class="descriptionTransition">Un langage qui s'appuie sur Java, mais avec un paradigme de programmation fonctionnelle, souvent utilisé pour le développement web et les applications distribuées.</p>`,

      `<h2 class="titleTransition">Haskell</h2>
      <p class="descriptionTransition">Un langage de programmation fonctionnelle pur, principalement utilisé dans la recherche académique et le développement de logiciels critiques.</p>`,

      `<h2 class="titleTransition">SQL (Structured Query Language)</h2>
      <p class="descriptionTransition">Un langage de requête utilisé pour la gestion de bases de données relationnelles.</p>`,

      `<h2 class="titleTransition">Rust</h2>
      <p class="descriptionTransition">Connu pour sa sécurité et sa performance, Rust est utilisé pour le développement système, les jeux vidéo et les applications à haute sécurité.</p>`,

      `<h2 class="titleTransition">Dart</h2>
      <p class="descriptionTransition">Le langage de programmation derrière le framework Flutter de Google, utilisé pour développer des applications mobiles multiplateformes.</p>`,

      `<h2 class="titleTransition">TypeScript</h2>
      <p class="descriptionTransition">Une extension de JavaScript qui ajoute des fonctionnalités de typage statique pour faciliter le développement d'applications web complexes.</p>`,

      `<h2 class="titleTransition">COBOL (Common Business-Oriented Language)</h2>
      <p class="descriptionTransition">Un langage historique utilisé dans les applications d'entreprise, les systèmes bancaires et financiers.</p>`,

      `<h2 class="titleTransition">Ada</h2>
      <p class="descriptionTransition">Principalement utilisé dans des applications critiques pour la sécurité, comme les systèmes embarqués et les systèmes aérospatiaux.</p>`,
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

export default LangagesTransitions;
