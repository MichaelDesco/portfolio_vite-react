import React, { useCallback, useEffect } from "react";
import "./realisations.scss";

const Realisations: React.FC = () => {
  const text = "Réalisations";

  // Fonction curried pour animer un élément avec un délai basé sur l'index
  const addClassWithDelay =
    (className: string) => (element: HTMLElement, index: number) =>
      setTimeout(() => element.classList.add(className), index * 100);

  // Animation des lettres
  const animateText = useCallback(() => {
    const letterElements = Array.from(
      document.querySelectorAll<HTMLElement>(".letter")
    );

    letterElements.forEach((element, index) => {
      // Applique un délai d'animation unique basé sur l'index de la lettre
      element.style.animationDelay = `${index * 0.1}s`;
      element.classList.add("animate");
    });
  }, []);

  useEffect(() => {
    animateText();
  }, [animateText]);

  return (
    <div className="realisations">
      <div className="waviy">
        <h3>
          {text.split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </h3>
        <p>en cours de développement</p>
      </div>
      <div className="projects">
        {[
          {
            frontImg: "./images/holyLogo.png",
            backImg: "./images/holySite.png",
            links: [
              {
                url: "https://github.com/MichaelDesco/holyBurgerFront",
                label: "code Front",
              },
              {
                url: "https://github.com/MichaelDesco/holyBurgerApiRest",
                label: "code Back",
              },
            ],
          },
          {
            frontImg: "./images/cospaceHouse.gif",
            backImg: null,
            links: [
              {
                url: "",
                label: "code Front",
              },
              {
                url: "",
                label: "code Back",
              },
            ],
          },
          {
            frontImg: "./images/Blast.png",
            backImg: null,
            links: [
              {
                url: "",
                label: "code Front",
              },
              {
                url: "",
                label: "code Back",
              },
            ],
          },
          {
            frontImg: "./images/portfolio.gif",
            backImg: null,
            links: [
              {
                url: "",
                label: "code Front",
              },
              {
                url: "",
                label: "code Back",
              },
            ],
          },
        ].map((project, idx) => (
          <div key={idx} className="container-project-link">
            <div className="project">
              <div className="cardFront">
                <img src={project.frontImg} alt="" />
              </div>
              {project.backImg && (
                <div className="cardBack">
                  <img src={project.backImg} alt="" />
                </div>
              )}
            </div>
            <div className="container-link">
              {project.links.map((link, index) =>
                link.url ? (
                  <a key={index} href={link.url}>
                    {link.label}
                  </a>
                ) : (
                  <a key={index}>{link.label}</a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
