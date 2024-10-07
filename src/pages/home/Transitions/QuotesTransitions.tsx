import React, { useMemo } from "react";
import TransitionList from "../../../components/TransitionList/TransitionList";
import "./quotes-transitions.scss";

// Définition des citations
const QuotesTransitions: React.FC = () => {
  const paragraphs = useMemo(
    () => [
      `<p class="quoteTransition">"Ce que nous savons est une goutte d'eau, ce que nous ignorons est l'océan."</p>
      <h2 class="autorTransition">Isaac Newton</h2>`,

      `<p class="quoteTransition">"L'imagination est plus importante que le savoir."</p>
      <h2 class="autorTransition">Nikola Tesla</h2>`,

      `<p class="quoteTransition">"Rien dans la vie n'est à craindre, tout est à comprendre."</p>
      <h2 class="autorTransition">Marie Curie</h2>`,

      `<p class="quoteTransition">"La connaissance s'accroît en proportion de ce que l'on partage."</p>
      <h2 class="autorTransition">Albert Einstein</h2>`,

      `<p class="quoteTransition">"Le web n'est pas seulement sur l'information, c'est sur l'interaction."</p>
      <h2 class="autorTransition">Tim Berners-Lee</h2>`,

      `<p class="quoteTransition">"La persévérance est non seulement de continuer, mais de recommencer après une erreur."</p>
      <h2 class="autorTransition">Confucius</h2>`,

      `<p class="quoteTransition">"La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout."</p>
      <h2 class="autorTransition">Albert Einstein</h2>`,

      `<p class="quoteTransition">"Les grandes choses ne sont pas faites par impulsion, mais par une série de petites choses réunies."</p>
      <h2 class="autorTransition">Vincent van Gogh</h2>`,

      `<p class="quoteTransition">"L'écriture est une exploration. Vous commencez par rien et apprenez au fur et à mesure."</p>
      <h2 class="autorTransition">E.L. Doctorow</h2>`,

      `<p class="quoteTransition">"L'innovation naît de la volonté de surmonter l'obstacle."</p>
      <h2 class="autorTransition">Albert Szent-Györgyi</h2>`,

      `<p class="quoteTransition">"Le succès n'est pas définitif, l'échec n'est pas fatal. C'est le courage de continuer qui compte."</p>
      <h2 class="autorTransition">Winston Churchill</h2>`,

      `<p class="quoteTransition">"Chaque expert a été un débutant une fois."</p>
      <h2 class="autorTransition">Helen Hayes</h2>`,

      `<p class="quoteTransition">"N'ayez pas peur de faire un grand pas. Vous ne pouvez pas traverser un abîme en petits sauts."</p>
      <h2 class="autorTransition">David Lloyd George</h2>`,

      `<p class="quoteTransition">"L'innovation vient du croisement des connaissances."</p>
      <h2 class="autorTransition">Nicholas Negroponte</h2>`,

      `<p class="quoteTransition">"Tout le monde savait que c'était impossible à faire. Puis un jour, quelqu'un est arrivé qui ne le savait pas, et il l'a fait."</p>
      <h2 class="autorTransition">Albert Einstein</h2>`,

      `<p class="quoteTransition">"Les ordinateurs sont inutiles. Ils ne peuvent que vous donner des réponses."</p>
      <h2 class="autorTransition">Pablo Picasso</h2>`,
    ],
    []
  );

  return <TransitionList items={paragraphs} intervalTime={6000} />;
};

export default QuotesTransitions;
