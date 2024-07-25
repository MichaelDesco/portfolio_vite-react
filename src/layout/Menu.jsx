import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFeatherPointed, faBars } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

const Menu = () => {
    const [isSticky, setIsSticky] = useState(false); // Ajout de l'état pour le menu collant
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout de l'état pour le menu déroulant
    const backToTopRef = useRef(null); // Ajout de la référence pour le bouton de retour en haut
    const btnContactRef = useRef(null); // Ajout de la référence pour le bouton de contact
    const btnFormationRef = useRef(null); // Ajout de la référence pour le bouton de formation
    const btnRealisationsRef = useRef(null); // Ajout de la référence pour le bouton de réalisations
    const btnlangagesRef = useRef(null); // Ajout de la référence pour le bouton de langages
    const btntechnologiesRef = useRef(null); // Ajout de la référence pour le bouton de technologies
    const menuContainerRef = useRef(null); // Ajout de la référence pour le menu déroulant

    useEffect(() => {
        const backToTop = backToTopRef.current; 
        const btnContact = btnContactRef.current;
        const btnFormation = btnFormationRef.current;
        const btnRealisations = btnRealisationsRef.current;
        const btnlangages = btnlangagesRef.current;
        const btntechnologies = btntechnologiesRef.current;

        // Ajout de l'écouteur d'événement pour le scroll du menu sticky
        const handleScroll = () => {
            // le menu devient derourlant si la largeur de la fenêtre est inférieure à 767px
            if (window.innerWidth <= 767 && isMenuOpen) {
                setIsMenuOpen(false); 
            }
            // le menu devient collant si le scroll est supérieur à 180px
            if (backToTop && window.scrollY < 180) {
                setIsSticky(false);
                backToTop.style.display = "none";
            } else if (backToTop && window.scrollY > 180) {
                setIsSticky(true);
                backToTop.style.display = "block";
            } 

            
            if (btnFormation && ((window.scrollY > 700 && window.scrollY < 1400))) {
                btnFormation.style.display = "none";
            } else {
                btnFormation.style.display = "inline-flex";
                btnFormation.style.justifyContent = "center";
            }
            
            if (btnRealisations && ((window.scrollY > 1400 && window.scrollY <= 1800))) {
                btnRealisations.style.display = "none";
            } else {                
                btnRealisations.style.display = "inline-flex";
                btnRealisations.style.justifyContent = "center";
            }
            
            if (btnlangages && ((window.scrollY > 1800 && window.scrollY <= 2500))) {
                btnlangages.style.display = "none";
            } else {                
                btnlangages.style.display = "inline-flex";
                btnlangages.style.justifyContent = "center";
            }
            
            if (btntechnologies && ((window.scrollY > 2500 && window.scrollY <= 3400))) {
                btntechnologies.style.display = "none";
            } else {                
                btntechnologies.style.display = "inline-flex";
                btntechnologies.style.justifyContent = "center";
            }
            
            if (btnContact && (window.scrollY > 3400)) {
                btnContact.style.display = "none";
            } else {
                btnContact.style.display = "inline-flex";
                btnContact.style.justifyContent = "center";
            }
        };

        const handleDocumentClick = (event) => {
            // Fermer le menu si on clique en dehors du menu
            if (
              menuContainerRef.current &&
              !menuContainerRef.current.contains(event.target) &&
              window.innerWidth <= 767 && 
              isMenuOpen
            ) {
              setIsMenuOpen(false);
            }
        };

        const handleBackToTopClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleDocumentClick);
        backToTop.addEventListener('click', handleBackToTopClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleDocumentClick);
            backToTop.removeEventListener('click', handleBackToTopClick);
        };
    }, [isMenuOpen]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div ref={menuContainerRef}>        
                <nav className={`navHeader${isSticky ? ' sticky' : ''}`}>
                    <FontAwesomeIcon icon={faHome} ref={backToTopRef} id='fa-home' className='fa-home fa-beat' />
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <div ref={btnFormationRef}>
                            <li>
                                    <a href="#formation" className="btnMenu">Formations </a>
                            </li>
                        </div>
                        <div ref={btnRealisationsRef}>
                            <li>
                                    <a href="#realisations" className="btnMenu">Réalisations</a>
                            </li>
                        </div>
                        <div ref={btnlangagesRef}>
                            <li>
                                    <a href="#langages" className="btnMenu">Langages</a>
                            </li>
                        </div>
                        <div ref={btntechnologiesRef}>
                            <li>
                                    <a href="#technologies" className="btnMenu">Technologies</a>
                            </li>
                        </div>
                        <div ref={btnContactRef}>
                            <li>
                                    <a href="#contact" className='btnMenu '>
                                        Contact
                                        <FontAwesomeIcon className="fa-feather-pointed" icon={faFeatherPointed} />
                                    </a>      
                            </li>
                        </div>
                    </ul>
                    <FontAwesomeIcon className="hamburger hamburger--emphatic fa-bars" icon={faBars} onClick={handleMenuToggle}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </FontAwesomeIcon>

                </nav>
            </div>
        </>
    );
};

export default Menu;