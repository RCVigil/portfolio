import React from 'react';
import Header from './Header';
import '../Styles/Components/index.sass'
import SobrePort from './sobrePort';
import Footer from './Footer';
import Notebook from '../Utils/Notebook';
import PrincipaisSatcks from '../Utils/PrincipaisSatcks';
import ProjetosGithub from '../Pages/ProjetosGithub';
import NoteApple from '../images/noteApple.jpg'

const Index = () => {
  return (
    <div
    // style={{background: `url(${NoteApple})`}}
      className='container-fluid col-11 sumIndex'
    >
      <Header/>
      <div className="body-site">
        <Notebook/>
        <SobrePort/>
        <ProjetosGithub/>
        <PrincipaisSatcks/>
      </div>
      <Footer/>
    </div>
  );
}

export default Index;
