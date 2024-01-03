import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFeatherPointed, faBars } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout de l'état pour le menu déroulant
    const backToTopRef = useRef(null);
    const btnContactRef = useRef(null);
    const btnFormationRef = useRef(null);
    const btnRealisationsRef = useRef(null);
    const btnlangagesRef = useRef(null);
    const btntechnologiesRef = useRef(null);
    const menuContainerRef = useRef(null); // Ajout de la référence pour le menu déroulant

    useEffect(() => {
        const backToTop = backToTopRef.current;
        const btnContact = btnContactRef.current;
        const btnFormation = btnFormationRef.current;
        const btnRealisations = btnRealisationsRef.current;
        const btnlangages = btnlangagesRef.current;
        const btntechnologies = btntechnologiesRef.current;
        const handleScroll = () => {
            if (window.innerWidth <= 767 && isMenuOpen) {
                setIsMenuOpen(false);
            }

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
                    <FontAwesomeIcon className="fa-bars" icon={faBars} onClick={handleMenuToggle}/>
                </nav>
            </div>
        </>
    );
};

export default Menu;