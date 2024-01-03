import React, { useEffect, useState, useMemo } from 'react';
import './realisations.scss';

const Realisations = () => {
    const text = "Réalisations";

    useEffect(() => {
        const animateText = () => {
            const letterElements = document.querySelectorAll('.letter');
            letterElements.forEach((letter, index) => {
                letter.style.setProperty('--i', index + 1);
                setTimeout(() => {
                    letter.classList.add('animate');
                }, index * 100); // Ajoutez un délai de 100 ms entre chaque lettre
            });
        };

        animateText();
    }, []);

    const paragraphs = useMemo(() => [
        `<span class="titleTransition">Patience</span><br />
            La programmation et la résolution de problèmes informatiques peuvent être frustrantes. Il est essentiel de rester calme et patient lorsqu'on est confronté à des difficultés.`,
        `<span class="titleTransition">Autonomie</span><br />
            Les développeurs web doivent être capables de travailler de manière indépendante et prendre des initiatives pour résoudre des problèmes.`,
        `<span class="titleTransition">Créativité</span><br />
            Être capable de penser de manière créative est essentiel pour concevoir des solutions innovantes et résoudre des problèmes complexes.`,
        `<span class="titleTransition">Attention aux détails</span><br />
            Les petits détails peuvent avoir un impact important sur le fonctionnement d'un site web. Une grande attention aux détails est donc essentielle pour éviter les erreurs.`,
        `<span class="titleTransition">Esprit d'équipe</span><br />
            Travailler en équipe est souvent nécessaire pour développer des projets web. Savoir collaborer, écouter les autres et communiquer efficacement est donc important.`,
        `<span class="titleTransition">Flexibilité</span><br />
            Le domaine du développement web évolue rapidement, et il est essentiel d'être ouvert au changement et de s'adapter aux nouvelles technologies et méthodes.`,
        `<span class="titleTransition">Gestion du temps</span><br />
            Les développeurs web doivent être capables de gérer leur temps efficacement pour respecter les délais et les priorités.`,
        `<span class="titleTransition">Communication</span><br />
            La capacité à communiquer clairement, que ce soit avec des collègues, des clients ou des utilisateurs, est cruciale.`,
        `<span class="titleTransition">Respect des normes et des bonnes pratiques :</span><br />
            Un bon développeur web doit être soucieux de la qualité du code, du respect des normes de l'industrie et de l'adoption des bonnes pratiques de développement.`,
        `<span class="titleTransition">Curiosité</span><br />
            La technologie évolue rapidement, et les développeurs web doivent être curieux et désireux d'apprendre constamment de nouvelles choses.`,
        `<span class="titleTransition">Résolution de problèmes</span><br />
            La capacité à identifier, analyser et résoudre des problèmes est au cœur du travail d'un développeur web.`,
        `<span class="titleTransition">Éthique professionnelle</span><br />
            Les développeurs web doivent faire preuve d'intégrité, respecter les normes de confidentialité et traiter éthiquement les données des utilisateurs.`,
        `<span class="titleTransition">Gestion du stress</span><br />
        Le développement web peut être stressant, en particulier lorsque des délais sont serrés. Savoir gérer le stress est essentiel pour maintenir la qualité du travail.`,
        `<span class="titleTransition">Adaptabilité</span><br />
            Être capable de s'adapter à différents projets, langages de programmation et technologies est important pour rester compétitif.`,
        `<span class="titleTransition">Orientation utilisateur</span><br />
            Garder à l'esprit les besoins et les expériences des utilisateurs finaux lors du développement est essentiel pour créer des sites web conviviaux.`
    ], [])

    const [currentParagraph, setCurrentParagraph] = useState(0);

    useEffect(() => {
        const paragraphInterval = setInterval(() => {
            setCurrentParagraph((prevParagraph) =>
                prevParagraph < paragraphs.length - 1 ? prevParagraph + 1 : 0
            );
        }, 6000); // Change paragraph every 10 seconds

        return () => {
            clearInterval(paragraphInterval);
        };
    }, [paragraphs]);


    const adjustCardFrontSize = () => {
        const cardFronts = document.querySelectorAll('.cardFront');

        cardFronts.forEach(cardFront => {
            const img = cardFront.querySelector('img');

            const width = img.offsetWidth;
            const desiredHeight = width * 1.14; // Ajustez ce facteur selon vos besoins

            cardFront.style.height = `${desiredHeight}px`;
        });
    };
    window.addEventListener('load', adjustCardFrontSize);
    window.addEventListener('resize', adjustCardFrontSize);
    
    const adjustCardBackSize = () => {
        const cardBacks = document.querySelectorAll('.cardBack');
        cardBacks.forEach(cardBack => {
            const img = cardBack.querySelector('img');
            if (img) {
                const width = img.offsetWidth;
    
                // Ajustez desiredHeight en fonction de la largeur de l'écran
                let desiredHeight;
    
                if (window.innerWidth < 479) {
                    desiredHeight = width * 0.98;
                } else {
                    desiredHeight = width * 0.95; // ou tout autre facteur souhaité
                }
    
                cardBack.style.height = `${desiredHeight}px`;
            }
        });
    };
    window.addEventListener('load', adjustCardBackSize);
    window.addEventListener('resize', adjustCardBackSize);



    return (
        <>
            <div className="realisations">
                <div className='waviy'>
                    <h3>
                        {text.split('').map((letter, index) => (
                            <span key={index} className='letter animate'>{letter}</span>
                        ))}
                    </h3>
                    <p>en cours de développement</p>
                </div>
                <div className='projects'>
                    <div className='container-project-link'>
                        <div className='project'>
                            <div className="cardFront">
                                <img src="./images/holyLogo.png" alt="" />
                            </div>
                            <div className="cardBack">
                                <img src="./images/holySite.png" alt="" />
                            </div>
                        </div>
                        <div className='container-link'>
                            <a href="https://github.com/MichaelDesco/holyBurgerFront">code Front</a>
                            <a href="https://github.com/MichaelDesco/holyBurgerApiRest">code Back</a>
                        </div>
                    </div>
                    <div className='container-project-link'>
                        <div className='project'>
                            <div className="cardFront">
                                <img src="./images/cospaceHouse.gif" alt="" />
                            </div>
                            <div className="cardBack">
                                
                            </div>
                        </div>
                        <div className='container-link'>
                            <a >code Front</a>
                            <a >code Back</a>
                        </div>
                    </div>
                    <div className='container-project-link'>
                        <div className='project'>
                            <div className="cardFront">
                                <img src="./images/Blast.png" alt="" />
                            </div>
                            <div className="cardBack">
                                
                            </div>
                        </div>
                        <div className='container-link'>
                            <a >code Front</a>
                            <a >code Back</a>
                        </div>
                    </div>
                    <div className='container-project-link'>
                        <div className='project'>
                            <div className="cardFront">
                                <img src="./images/portfolio.gif" alt="" />
                            </div>
                            <div className="cardBack">
                                
                            </div>
                        </div>
                        <div className='container-link'>
                            <a>code Front</a>
                            <a>No Back</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-transition'>
                <div className='transition'>
                    {paragraphs.map((paragraph, index) => (
                        <p
                        key={index}
                        className={`transition-paragraph ${index === currentParagraph ? 'show' : ''} ${index !== currentParagraph ? 'fade-out' : ''}`}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Realisations;

