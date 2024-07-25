import './profil.scss'




const Profil = () => {
    return (
        <>
            <div className="profil">
                <div className='apropos'>
                    <h3>A propos de moi</h3>
                    <div className='apropos-paragraphes'>
                        <p>Enthousiaste à l'idée de faire du développement ma profession, j'ai entamé une formation à "La Piscine" à Mérignac en Gironde où j'ai acquis les bases pour concevoir des sites web fonctionnels intégrant des données et aux visuels attrayants.</p>
                        <p>A la suite de la formation, j'ai participé au développement d'un projet de génération d'écritures comptables pour la société "Avista" à Bordeaux. J'ai pu y compléter ma formation par l'utilisation de technologie diffèrentes confirmant ma capacité d'adaptation humaine et technique.</p>
                        <p>Bien que débutant, ma passion pour ce métier est un réel épanouissement qui me pousse à m'investir pleinement afin d'atteindre mes objectifs.</p>
                    </div>
                </div>
            </div>
            <div className="actuellement">
                <h4>Actuellement</h4>
                <p>
                    <span className='mot mot1'>EN RECHERCHE</span>
                    <span className='mot mot2'>D'UN POSTE DE</span>
                    <span className='mot mot3'>DEVELOPPEUR WEB</span>
                </p>
            </div>
        </>
    )
}
export default Profil;