import React from "react";
import { motion, useScroll } from "framer-motion";

import "../Styles/Components/index.sass";

import Header from "./Header";
import AsideLeft from "./Aside-Left";
import Notebook from "../Utils/Notebook";
import PrincipaisSatcks from "../Utils/PrincipaisSatcks";
import ProjetosGithub from "../Pages/ProjetosGithub";
import Footer from "./Footer";
import ScrollToTopButton from "../Utils/ScrollToTopButtn";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="sumIndex">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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
