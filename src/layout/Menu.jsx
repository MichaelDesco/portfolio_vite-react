import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFeatherPointed, faBars } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ajout de l'état pour le menu déroulant
    const backToTopRef = useRef(null);
    const btnContactRef = useRef(null);

    useEffect(() => {
        const backToTop = backToTopRef.current;
        const btnContact = btnContactRef.current;
        const handleScroll = () => {
            if (backToTop && window.scrollY < 180) {
                setIsSticky(false);
                backToTop.style.display = "none";
            } else if (backToTop && window.scrollY > 180) {
                setIsSticky(true);
                backToTop.style.display = "block";
            } 

            if (btnContact && (window.scrollY > 3400 || (window.innerWidth <= 575 && !isMenuOpen))) {
                btnContact.style.display = "none";
            } else {
                btnContact.style.display = "inline-flex";
            }
        };

        const handleBackToTopClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        window.addEventListener('scroll', handleScroll);
        backToTop.addEventListener('click', handleBackToTopClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            backToTop.removeEventListener('click', handleBackToTopClick);
        };
    }, [isMenuOpen]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`navHeader${isSticky ? ' sticky' : ''}`}>
                <FontAwesomeIcon icon={faHome} ref={backToTopRef} id='fa-home' className='fa-home fa-beat' />
                <ul className={isMenuOpen ? 'open' : ''}>
                    <li><a href="#formation" className="btnMenu">Formations</a></li>
                    <li><a href="#realisations" className="btnMenu">Réalisations</a></li>
                    <li><a href="#langages" className="btnMenu">Langages</a></li>
                    <li><a href="#technologies" className="btnMenu">Technologies</a></li>
                    <li ref={btnContactRef}>
                        <a href="#contact" className='btnMenu '>
                            Contact
                            <FontAwesomeIcon className="fa-feather-pointed" icon={faFeatherPointed} />
                        </a>      
                    </li>
                </ul>
                <FontAwesomeIcon className="fa-bars" icon={faBars} onClick={handleMenuToggle}/>
            </nav>
        </>
    );
};

export default Menu;



