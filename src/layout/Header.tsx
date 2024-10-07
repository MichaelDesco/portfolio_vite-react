import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerTop">
        <div className="social-link">
          <a
            className="welcomeToTheJungle"
            href="https://www.linkedin.com/in/michael-descorcier-40568a84/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/welcomeToTheJungleLogo.png" alt="" />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/michael-descorcier-40568a84/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="github"
            href="https://github.com/MichaelDesco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="fa-github iconSize" icon={faGithub} />
          </a>
        </div>
        <div className="header-title">
          <div className="headerNameLink">
            <h1>
              <span className="hello">Bonjour,</span> je suis{" "}
              <span className="iam">Michaël DESCORCIER</span>
            </h1>
          </div>
          <h2>DÉVELOPPEUR D'APPLICATION WEB</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
