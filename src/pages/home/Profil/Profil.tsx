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
              Enthousiaste à l&#39;idée de faire du développement ma profession,
              j&#39;ai entamé une formation à &quot;La Piscine&quot; à Mérignac
              en Gironde où j&#39;ai acquis les bases pour concevoir des sites
              web fonctionnels, aux visuels attrayants, intégrant des données.
            </p>
            <p>
              A la suite de la formation, j&#39;ai participé au développement
              d&#39;un projet de génération d&#39;écritures comptables pour la
              société &quot;Avista&quot; à Bordeaux. J&#39;ai pu me confronter à
              la réalité du métier de développeur web, et ressort de cette
              expérience encore plus enthousiaste et motivé.
            </p>
            <p>
              En juillet 2024, j&#39;ai intégré une POEC Java Fullstack où
              j&#39;ai pu perfectionner mes compétences acquises mais aussi
              évoluer sur d&#39;autres langages et me tester sur d&#39;autres
              outils et environnements de travail. Cette formation m&#39;a
              permis de confirmer mes capacités d&#39;apprentissage et
              d&#39;adaptation.
            </p>
            <p>
              Bien que je ne bénéficie pas d&#39;une longue expérience, ma
              passion pour ce métier est un réel épanouissement qui me pousse à
              m&#39;investir pleinement afin d&#39;évoluer dans mes objectifs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
