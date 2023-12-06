import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <>
            <div className="headerTop">
                <div className="container-profil-picture">
                    <img className="profil-picture" src="../images/avatar.webp" alt="" />
                </div> 
                <div className="header-title">
                    <div className="headerNameLink">
                        <h1><span>Bonjour, </span>je suis Michaël DESCORCIER</h1>
                        <div className="container-link">
                            <a className="iconSocial" href="https://www.linkedin.com/in/michael-descorcier-40568a84/">
                                <FontAwesomeIcon className="fa-linkedin" icon={faLinkedin} />
                            </a>
                            <a className="iconSocial" href="https://github.com/MichaelDesco">
                                <FontAwesomeIcon className="fa-github" icon={faGithub} />
                            </a>
                            <a className="iconSocial" href="https://discord.gg/xCNP9ZKe">
                                <FontAwesomeIcon className="fa-discord" icon={faDiscord} />
                            </a>
                        </div>
                    </div>
                    <h2>DÉVELOPPEUR D'APPLICATION WEB</h2>
                </div>
                <div className="container-laptop-picture">
                    <img className="laptop-picture" src="../images/sticker.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Header;