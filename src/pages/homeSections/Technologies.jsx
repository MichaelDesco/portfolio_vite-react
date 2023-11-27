import React, { useEffect, useState, useMemo } from 'react';
import './technologies.scss';

const Technologies = () => {
    const [technologies] = useState([
        { name: 'Node', level: 70 },
        { name: 'Express', level: 80 },
        { name: 'MariaDB', level: 60 },
        { name: 'MicrosoftSQL', level: 50 },
        { name: 'Sequelize', level: 80 },
        { name: 'React', level: 60 },
        { name: 'Bootstrap', level: 70 },
        { name: 'Sass', level: 70 },
        { name: 'Github', level: 70 },
        { name: 'Azure', level: 50 },
    ]);
    useEffect(() => {
        // const technologiesContainer = document.getElementById('technologieLv');

        function handleScroll() {
            const windowHeight = window.innerHeight;
            // La variable 'technologiesContainerTop' n'est pas utilisée, donc vous pouvez la supprimer
            // const technologiesContainerTop = technologiesContainer.getBoundingClientRect().top;

            technologies.forEach((technologie, index) => {
                const technologieElement = document.getElementById(`technologie-${index}`);
                const technologieRect = technologieElement.getBoundingClientRect();

                if (
                    technologieRect.top <= windowHeight &&
                    technologieRect.bottom >= 0
                ) {
                    // Calculez la largeur en pourcentage en fonction du niveau
                    const widthPercentage = `${technologie.level}%`;
                    const technologieParagraph = technologieElement.querySelector('.name');
                    technologieParagraph.style.setProperty('--width-percentage', widthPercentage);
                } else {
                    const technologieParagraph = technologieElement.querySelector('.name');
                    technologieParagraph.style.setProperty('--width-percentage', '0%');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [technologies]);

    const paragraphs = useMemo(() => [
        `<span class="titleTransition">Langages de programmation</span><br />
            Maîtrise des langages de programmation web tels que HTML, CSS, JavaScript. Connaissance d'autres langages comme Python, Ruby, PHP, etc., selon les besoins du projet.`,
        `<span class="titleTransition">Frameworks et bibliothèques</span><br />
            Utilisation de frameworks et de bibliothèques populaires tels que React, Angular, Vue.js pour le développement front-end. Utilisation de frameworks back-end tels que Node.js, Ruby on Rails, Django, Laravel, etc.`,
        `<span class="titleTransition">Conception responsive</span><br />
            Capacité à créer des sites web qui s'adaptent aux différentes tailles d'écran (mobiles, tablettes, ordinateurs de bureau).`,
        `<span class="titleTransition">Base de données</span><br />
            Conception de bases de données et utilisation de systèmes de gestion de bases de données (SGBD) tels que MySQL, PostgreSQL, MongoDB, etc.`,
        `<span class="titleTransition">Conception et architecture logicielle :</span><br />
            Compréhension des principes de conception de logiciels et d'architecture MVC (Modèle-Vue-Contrôleur) ou d'autres architectures similaires.`,
        `<span class="titleTransition">Gestion de versions</span><br />
            Utilisation de systèmes de gestion de versions tels que Git pour le suivi des modifications du code source.`,
        `<span class="titleTransition">Sécurité</span><br />
            Connaissance des meilleures pratiques de sécurité web pour protéger les applications contre les attaques et les failles de sécurité.`,
        `<span class="titleTransition">Optimisation des performances</span><br />
            Capacité à optimiser la vitesse de chargement des pages web en minimisant les requêtes HTTP, en utilisant la mise en cache, etc.`,
        `<span class="titleTransition">Intégration de services tiers</span><br />
            Intégration de services externes tels que les API REST pour l'accès aux données ou d'autres fonctionnalités.`,
        `<span class="titleTransition">Débogage et tests</span><br />
            Compétences en débogage de code pour identifier et résoudre les problèmes. Réalisation de tests unitaires, tests d'intégration et tests fonctionnels.`,
        `<span class="titleTransition">Automatisation</span><br />
            Utilisation d'outils d'automatisation tels que Webpack, Gulp, ou Grunt pour simplifier les tâches répétitives.`,
        `<span class="titleTransition">Connaissances en SEO</span><br />
            Compréhension des principes de base du référencement (SEO) pour optimiser la visibilité des sites web dans les moteurs de recherche.`,
        `<span class="titleTransition">Gestion de projet</span><br />
            Capacité à travailler avec des méthodologies de gestion de projet telles que Scrum ou Agile.`,
        `<span class="titleTransition">Collaboration et communication</span><br />
            Capacité à travailler en équipe, à communiquer efficacement avec les membres de l'équipe, les clients et les utilisateurs.`,
        `<span class="titleTransition">Veille technologique</span><br />
            Maintien d'une veille technologique constante pour rester à jour avec les dernières tendances et les évolutions de l'industrie.`,
        `<span class="titleTransition">Documentation</span><br />
            Documentation claire et concise du code, des fonctionnalités et des processus pour faciliter la maintenance et la collaboration.`,
        `<span class="titleTransition">Déploiement</span><br />
            Déploiement de sites web sur des serveurs en utilisant des technologies telles que AWS, Heroku, ou des serveurs web traditionnels.`,
        `<span class="titleTransition">Analyse et résolution de problèmes</span><br />
            Compétence pour diagnostiquer et résoudre efficacement les problèmes techniques qui se posent.`,
        `<span class="titleTransition">Connaissance des normes et réglementations</span><br />
            Respect des normes de l'industrie et des réglementations en matière d'accessibilité, de confidentialité des données, etc.`,
        `<span class="titleTransition">Créativité et convivialité</span><br />
            Capacité à apporter une touche créative à la conception tout en maintenant une expérience utilisateur intuitive et conviviale.`,
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

    return (
        <>
            <div className="technologies">
                <h3>Environnement et outils de développement</h3>
                <div className='technologieLv' id='technologieLv'>
                    {technologies.map((technologie, index) => (
                        <div className="technologie" key={index} id={`technologie-${index}`}>
                            <div className='logoTechno name'>
                                <p className='name'>{technologie.name}</p>
                                <img src={`./images/${technologie.name.toLowerCase()}.png`} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container-transition'>
                <div className="transition3">
                    {paragraphs.map((paragraph, index) => (
                        <p
                        key={index}
                        className={`transition-paragraph ${index === currentParagraph ? 'show' : ''} ${index !== currentParagraph ? 'fade-out' : ''}`}
                        dangerouslySetInnerHTML={{ __html: paragraph }}>
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Technologies;