import React from "react";
import Annonce from "../../../components/Annonce/Annonce";

const Actuellement: React.FC = () => {
  return (
    <Annonce
      titre="Actuellement"
      contenu={["EN RECHERCHE", " D'UN POSTE DE ", "DEVELOPPEUR WEB"]}
    />
  );
};

export default Actuellement;
