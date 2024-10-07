import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./legalmention.scss";

const LegalMention: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-mention">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHome}
          className="fa-home fa-beat homeMention"
        />
      </Link>
      <h2>Mentions légales</h2>
      <p>
        Propriétaire : Descorcier Michaël, 17 rue Jean-Baptiste Colbert 33200
        Bordeaux.
      </p>
      <p>Hébergeur : Vercel - 440 N Barranca Ave #4133, 91723 Covina.</p>
      <p>
        Le site est réalisé par Michaël Descorcier, il est administré par
        Michaël Descorcier.
      </p>
      <p>Pour plus d'informations, contactez : michaeldesco@gmail.com.</p>
    </div>
  );
};

export default LegalMention;
