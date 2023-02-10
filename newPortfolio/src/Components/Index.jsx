import React from 'react';

import '../Styles/Components/index.sass'

import Header from './Header';
import AsideLeft from './Aside-Left'
import Notebook from '../Utils/Notebook';
import SobrePort from './sobrePort';
import PrincipaisSatcks from '../Utils/PrincipaisSatcks';
import ProjetosGithub from '../Pages/ProjetosGithub';
import Footer from './Footer';
// import NoteApple from '../images/noteApple.jpg'

const Index = () => {
  return (
    <div
      className='container-fluid col-11 sumIndex'
    >
      <Header/>
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <main className="body-site">
        <Notebook/>
        <SobrePort/>
        <ProjetosGithub/>
        <PrincipaisSatcks/>
      </main>
      <Footer/>
    </div>
  );
}

export default Index;
