import React from "react";

import "../Styles/Components/index.sass";

import Header from "./Header";
import AsideLeft from "./Aside-Left";
import Notebook from "../Utils/Notebook";
import PrincipaisSatcks from "../Utils/PrincipaisSatcks";
import ProjetosGithub from "../Pages/ProjetosGithub";
import Footer from "./Footer";
import ScrollToTopButton from "../Utils/ScrollToTopButtn";

const Index = () => {
  return (
    <div className="sumIndex">
      <div className="firstHeader">
        <Header />
      </div>
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <main className="body-site">
        <div className="firstNotebook-index">
          <Notebook />
        </div>
        <div className="firstProjetosGithub">
          <ProjetosGithub />
        </div>
        <div className="firstPrincipaisStacks">
          <PrincipaisSatcks />
        </div>
      </main>
      <div className="firstFooter">
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
