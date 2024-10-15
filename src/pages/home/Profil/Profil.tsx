import React from "react";
import "./profil.scss";

const Profil: React.FC = () => {
  return (
    <>
      <div className="profil">
        <div className="apropos">
          <h3>À propos de moi</h3>
          <div className="apropos-paragraphes">
            <p>
              Développeur web passionné, j'ai acquis des compétences solides à
              travers ma formation à "La Piscine" de Mérignac et des expériences
              professionnelles, notamment sur un projet de génération
              d'écritures comptables chez "Avista". J'ai également perfectionné
              mes compétences grâce à une POEC Java Fullstack, où j'ai renforcé
              ma capacité à m'adapter à différents environnements et outils.
            </p>
            <p>
              Toujours en quête de nouvelles solutions, je suis prêt à relever
              les défis qui me seront confiés, à travailler en équipe, et à
              rester à jour dans un secteur en constante évolution, car ce
              métier est avant tout une source d'épanouissement.
            </p>
            <p>
              Si mon profil correspond à vos attentes et que vous souhaitez en
              savoir plus, je serai ravi de discuter de vos projets et de
              répondre à vos questions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
