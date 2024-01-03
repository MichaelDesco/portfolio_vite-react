import React, { useEffect, useState, useMemo } from 'react';
import './langages.scss';

const Langages = () => {
  const [langages] = useState([
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'Javascript', level: 50 },
    { name: 'SQL', level: 55 },
  ]);

  useEffect(() => {
    // const langagesContainer = document.getElementById('langageLv');

    function handleScroll() {
      const windowHeight = window.innerHeight;
      // La variable 'langagesContainerTop' n'est pas utilisée, donc vous pouvez la supprimer
      // const langagesContainerTop = langagesContainer.getBoundingClientRect().top;

      langages.forEach((langage, index) => {
        const langageElement = document.getElementById(`langage-${index}`);
        const langageRect = langageElement.getBoundingClientRect();

        if (
          langageRect.top <= windowHeight && langageRect.bottom >= 0
        ) {
          // Calculez la largeur en pourcentage en fonction du niveau
          const widthPercentage = `${langage.level}%`;
          const langageParagraph = langageElement.querySelector('.name');
          langageParagraph.style.setProperty('--width-percentage', widthPercentage);
        } else {
          const langageParagraph = langageElement.querySelector('.name');
          langageParagraph.style.setProperty('--width-percentage', '0%');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [langages]);

  const paragraphs = useMemo(() => [
    `<span class="titleTransition">JavaScript</span><br> 
    Un langage de script largement utilisé pour la programmation web, permettant d'ajouter des fonctionnalités interactives aux sites web.`,
    `<span class="titleTransition">Python</span><br> 
    Un langage polyvalent, facile à apprendre, apprécié pour sa lisibilité. Il est utilisé pour le développement web, l'analyse de données, l'automatisation et bien plus encore.`,
    `<span class="titleTransition">Java</span><br> 
    Un langage orienté objet utilisé pour développer des applications d'entreprise, des applications Android et des systèmes embarqués.`,
    `<span class="titleTransition">C++</span><br> 
    Une extension du langage C, il est principalement utilisé pour le développement de jeux, de logiciels système et d'applications performantes.`,
    `<span class="titleTransition">C# (C-sharp)</span><br> 
    Un langage développé par Microsoft, utilisé pour le développement d'applications Windows, de jeux vidéo avec Unity et de logiciels d'entreprise.`,
    `<span class="titleTransition">Ruby</span><br> 
    Connu pour sa simplicité et sa lisibilité, Ruby est souvent utilisé pour le développement web grâce au framework Ruby on Rails.`,
    `<span class="titleTransition">PHP</span><br> 
    Un langage de script côté serveur utilisé pour le développement web dynamique, souvent en conjonction avec des bases de données.`,
    `<span class="titleTransition">Swift</span><br> 
    Développé par Apple, Swift est utilisé pour créer des applications iOS, macOS, watchOS et tvOS.`,
    `<span class="titleTransition">Kotlin</span><br> 
    Un langage de programmation moderne utilisé pour le développement d'applications Android, en complément ou à la place de Java.`,
    `<span class="titleTransition">R</span><br> 
    Un langage spécialisé dans l'analyse statistique et la visualisation de données.`,
    `<span class="titleTransition">Go (ou Golang)</span><br> 
    Créé par Google, Go est apprécié pour sa vitesse et sa simplicité, principalement utilisé pour le développement de systèmes et d'applications réseau.`,
    `<span class="titleTransition">Perl</span><br> 
    Un langage polyvalent utilisé pour le traitement de texte, la gestion de fichiers et d'autres tâches administratives.`,
    `<span class="titleTransition">Scala</span><br> 
    Un langage qui s'appuie sur Java, mais avec un paradigme de programmation fonctionnelle, souvent utilisé pour le développement web et les applications distribuées.`,
    `<span class="titleTransition">Haskell</span><br> 
    Un langage de programmation fonctionnelle pur, principalement utilisé dans la recherche académique et le développement de logiciels critiques.`,
    `<span class="titleTransition">SQL (Structured Query Language)</span><br> 
    Un langage de requête utilisé pour la gestion de bases de données relationnelles.`,
    `<span class="titleTransition">Rust</span><br> 
    Connu pour sa sécurité et sa performance, Rust est utilisé pour le développement système, les jeux vidéo et les applications à haute sécurité.`,
    `<span class="titleTransition">Dart</span><br> 
    Le langage de programmation derrière le framework Flutter de Google, utilisé pour développer des applications mobiles multiplateformes.`,
    `<span class="titleTransition">TypeScript :</span><br> 
    Une extension de JavaScript qui ajoute des fonctionnalités de typage statique pour faciliter le développement d'applications web complexes.`,
    `<span class="titleTransition">COBOL (Common Business-Oriented Language)</span><br> 
    Un langage historique utilisé dans les applications d'entreprise, les systèmes bancaires et financiers.`,
    `<span class="titleTransition">Ada</span><br> 
    Principalement utilisé dans des applications critiques pour la sécurité, comme les systèmes embarqués et les systèmes aérospatiaux.`
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
      <div className="langages">
        <div className="langageLv" id="langageLv">
          <h3>Langages de programmation</h3>
          {langages.map((langage, index) => (
            <div className="langage" key={index} id={`langage-${index}`}>
              <img src={`./images/${langage.name.toLowerCase()}.png`} alt="" />
              <p className='name'>{langage.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='container-transition'>
        <div className="transition2">
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
  );
};

export default Langages;