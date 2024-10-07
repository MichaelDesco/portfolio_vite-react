import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./confidential-politics.scss";

const ConfidentialPolitics: React.FC = () => {
  return (
    <div className="confidential-politics">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="fa-home fa-beat homePolitics" />
      </Link>
      <h2>Politique de confidentialité</h2>
      <p>
        Les informations collectées via le formulaire de contact sont uniquement
        utilisées dans le cadre de la prise de contact à des fins
        professionnelles. Elles ne seront ni conservées ni utilisées à des fins
        commerciales. Aucune donnée ne sera partagée avec des tiers.
      </p>
    </div>
  );
};

export default ConfidentialPolitics;
