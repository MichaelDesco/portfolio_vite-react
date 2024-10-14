import React from "react";
import "./annonce.scss";

interface AnnonceProps {
  titre: string;
  contenu: string[];
}

const Annonce: React.FC<AnnonceProps> = ({ titre, contenu }) => {
  return (
    <div className="annonce">
      <h4>{titre}</h4>
      <p>
        {contenu.map((mot, index) => (
          <span key={index} className={`mot mot${index + 1}`}>
            {mot}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Annonce;
