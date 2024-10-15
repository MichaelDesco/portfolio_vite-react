import React from "react";
import useAutoSwitch from "../../hooks/useAutoSwitch";
import "./quotesTransitionList.scss";
import "./transitionList.scss";

// Définition des props du composant
interface TransitionListProps {
  items: string[];
  intervalTime: number;
  useQuotesTransition?: boolean; // Nouvelle prop pour déterminer la classe à utiliser
}

const TransitionList: React.FC<TransitionListProps> = ({
  items,
  intervalTime,
  useQuotesTransition = false, // Par défaut, on utilise `false` pour appliquer `container-transition`
}) => {
  const currentParagraph = useAutoSwitch(items.length, intervalTime);

  // Déterminer la classe à appliquer en fonction de la prop `useQuotesTransition`
  const containerClass = useQuotesTransition
    ? "container-quotes-transition"
    : "container-transition";

  const transitionClass = useQuotesTransition
    ? "quotes-transition"
    : "transition";

  return (
    <div className={containerClass}>
      <div className={transitionClass}>
        {items.map((paragraph, index) => (
          <div
            key={index}
            className={`transition-paragraph ${
              index === currentParagraph ? "show" : ""
            } ${index !== currentParagraph ? "fade-out" : ""}`}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TransitionList;
