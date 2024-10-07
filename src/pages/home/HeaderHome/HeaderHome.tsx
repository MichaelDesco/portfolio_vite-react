import React from "react";
import Header from "../../../layout/Header";
import Menu from "../../../layout/Menu";
import Profil from "../Profil/Profil";
import "./header-home.scss";

const HeaderHome: React.FC = () => {
  return (
    <div id="header-home">
      <Header />
      <Menu />
      <div>
        <Profil />
      </div>
    </div>
  );
};

export default HeaderHome;
