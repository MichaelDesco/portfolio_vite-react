import React from "react";
import useAutoSwitch from "../../hooks/useAutoSwitch";
import "./transitionList.scss";

// Définition des props du composant
interface TransitionListProps {
  items: string[];
  intervalTime: number;
}

const TransitionList: React.FC<TransitionListProps> = ({
  items,
  intervalTime,
}) => {
  const currentParagraph = useAutoSwitch(items.length, intervalTime);

  return (
    <div className="container-transition" id="quotes-transition">
      <div className="transition">
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
