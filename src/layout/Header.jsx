import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <>
            <div className="headerTop">
                <div className="header-title">
                    <div className="headerNameLink">
                        <h1><span>Bonjour, </span>je suis Michaël DESCORCIER</h1>
                        <div className="container-link">
                            <a className="iconSocial" href="https://www.linkedin.com/in/michael-descorcier-40568a84/">
                                <FontAwesomeIcon className="fa-linkedin iconSize" icon={faLinkedin} />
                            </a>
                            <a className="iconSocial" href="https://github.com/MichaelDesco">
                                <FontAwesomeIcon className="fa-github iconSize" icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <h2>DÉVELOPPEUR D'APPLICATION WEB</h2>
                </div>
            </div>
        </>
    )
}

export default Header;