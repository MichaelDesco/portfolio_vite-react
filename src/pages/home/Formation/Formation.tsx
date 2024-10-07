import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./formation.scss";

// Définition du type des props, si nécessaire (ajoutez des propriétés selon vos besoins)
interface FormationProps {}

const Formation: React.FC<FormationProps> = () => {
  return (
    <div className="formation">
      <h3 className="formationTitle">Mon parcours de formation</h3>
      <div className="parcours">
        <div className="introParcours">
          <div className="experience">
            <div className="experienceInfo">
              <div className="experienceImg">
                <img src="./images/logom2i.webp" alt="Logo M2I" />
              </div>
              <div className="experienceDescription">
                <p>POEC Développeur Java Full stack</p>
                <p>24 Juin 2024 - 20 septembre 2024</p>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="experienceInfo">
              <div className="experienceImg">
                <img src="./images/avista.png" alt="Logo Avista" />
              </div>
              <div className="experienceDescription">
                <p>Stage développeur full stack</p>
                <p>17 juillet 2023 - 15 septembre 2023</p>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="experienceInfo">
              <div className="experienceImg">
                <img src="./images/piscine.png" alt="Logo Piscine" />
              </div>
              <div className="experienceDescription">
                <p>Formation développeur d'application web & mobile</p>
                <p>Titre RNCP niveau III obtenu en juillet 2023</p>
                <p>16 janvier 2023 - 15 septembre 2023</p>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="experienceInfo">
              <div className="experienceImg">
                <img src="./images/egs.png" alt="Logo EGS" />
              </div>
              <div className="experienceDescription">
                <p>Immersion au métier de développeur web</p>
                <p>01 octobre 2023 - 31 octobre 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cvParcours">
          <h3 className="cvTitle">Mon CV</h3>
          <div className="cv-picture">
            <img src="./images/cvDescoMike.webp" alt="Mon CV" />
          </div>
          <a className="cvDownload" href="./download/cvDescoMike.pdf" download>
            <FontAwesomeIcon
              className="fa-download fa-bounce"
              icon={faDownload}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Formation;
