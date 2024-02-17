import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion, useScroll } from "framer-motion";

import Header from "./Header";
import AsideLeft from "./Aside-Left";
import Notebook from "../Utils/Notebook";
import PrincipaisSatcks from "../Utils/PrincipaisSatcks";
import ProjetosGithub from "../Pages/ProjetosGithub";
import Footer from "./Footer";
import ScrollToTopButton from "../Utils/ScrollToTopButtn";

import "../Styles/Components/index.sass";
import PortfolioProvider from "../Context/PortfolioProviders";

const Index = () => {
  const { scrollYProgress } = useScroll();

  // Define uma media query para telas de celular
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)", // Define aqui o tamanho máximo para considerar como celular
  });

  return (
    <div className="sumIndex" id="home">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="firstHeader">
        <Header />
      </div>
      {!isMobile && (
        <div className="asideLeft">
          <AsideLeft />
        </div>
      )}
      <main className="body-site">
        <div className="firstNotebook-index">
          <Notebook />
        </div>
        <PortfolioProvider>
          <div className="firstProjetosGithub">
            <ProjetosGithub />
          </div>
        </PortfolioProvider>
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
