import React from "react";

// import { Helmet } from 'react-helmet';

import Footer from "../../layout/Footer";
import Contact from "./Contact/Contact";
import Formation from "./Formation/Formation";
import HeaderHome from "./HeaderHome/HeaderHome";
import LangagesList from "./List/LangagesList";
import TechnologiesList from "./List/TechnologiesList";
import Realisations from "./Realisations/Realisations";
import Actuellement from "./Transitions/Actuellement";
import LangagesTransitions from "./Transitions/LangagesTransitions";
import Objectif from "./Transitions/Objectif";
import QuotesTransitions from "./Transitions/QuotesTransitions";
import RealisationsTransitions from "./Transitions/RealisationsTransitions";
import TechnologiesTransitions from "./Transitions/TechnologiesTransitions";

const Home: React.FC = () => {
  return (
    <>
      {/* <Helmet>
                <title>PortFolio Michaël Descorcier</title>
            </Helmet> */}

      <header id="home">
        <HeaderHome />
      </header>

      <main>
        <div>
          <Actuellement />
        </div>
        <div id="formation">
          <Formation />
        </div>
        <div>
          <Objectif />
        </div>
        <div id="realisations">
          <Realisations />
        </div>
        <div>
          <RealisationsTransitions />
        </div>
        <div id="langages">
          <LangagesList />
        </div>
        <div>
          <LangagesTransitions />
        </div>
        <div id="technologies">
          <TechnologiesList />
        </div>
        <div>
          <TechnologiesTransitions />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <QuotesTransitions />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
