import {
  faBars,
  faFeatherPointed,
  faHome,
  faXmark, // Ajouter l'icône de croix
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./menu.scss";

// Définition des sections avec leurs intervalles
const sections = [
  { id: "formation", minScroll: 900, maxScroll: 1600, label: "Formations" },
  {
    id: "realisations",
    minScroll: 1800,
    maxScroll: 2500,
    label: "Réalisations",
  },
  { id: "langages", minScroll: 1800, maxScroll: 2500, label: "Langages" },
  {
    id: "technologies",
    minScroll: 2500,
    maxScroll: 3400,
    label: "Technologies",
  },
  { id: "contact", minScroll: 3400, maxScroll: Infinity, label: "Contact" },
];

// Fonction curryfiée pour vérifier si une position de scroll se trouve dans un intervalle
const isInScrollRange =
  (min: number, max: number) => (scrollPosition: number) =>
    scrollPosition >= min && scrollPosition < max;

const Menu: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Mise à jour de l'état sticky
      setIsSticky(scrollPosition > 150);

      // Trouver la section visible en utilisant une fonction curryfiée
      const currentSection = sections.find(({ minScroll, maxScroll }) =>
        isInScrollRange(minScroll, maxScroll)(scrollPosition)
      );

      setVisibleSection(currentSection ? currentSection.id : null);
    };

    // Ajout de l'écouteur d'événement scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur d'événement
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className={`navHeader${isSticky ? " sticky" : ""}`}>
        <FontAwesomeIcon
          icon={faHome}
          id="fa-home"
          className="fa-home fa-beat"
          onClick={handleBackToTopClick}
        />
        <ul className={isMenuOpen ? "open" : "closed"}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="btnMenu" onClick={handleMenuToggle}>
                {label}
                {id === "contact" && (
                  <FontAwesomeIcon
                    className="fa-feather-pointed"
                    icon={faFeatherPointed}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <FontAwesomeIcon
          className="hamburger hamburger--emphatic fa-bars"
          icon={isMenuOpen ? faXmark : faBars} // Changer l'icône selon l'état du menu
          onClick={handleMenuToggle}
        />
      </nav>
    </div>
  );
};

export default Menu;
