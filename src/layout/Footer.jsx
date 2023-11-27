import { Link } from "react-router-dom";

import './footer.scss';

const Footer  = () => {
    return (
        <>
            <div className="footer">
                <p>© Copyright 2023 - Michaël Descorcier - Tous droits réservés.</p>
                <nav>
                    <ul>
                        <li>
                            <Link to= '/' className="footerLink">Mentions légales</Link>
                        </li>
                        <li>
                            <Link to='/' className="footerLink">Politique de confidentialité</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Footer;