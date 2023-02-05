import React from 'react';
import Header from './Header';
import '../Styles/Components/index.sass'
import SobrePort from './sobrePort';
import Footer from './Footer';
import Notebook from '../Utils/Notebook';
import PrincipaisSatcks from '../Utils/PrincipaisSatcks';
import ProjetosGithub from '../Pages/ProjetosGithub';


const Index = () => {
  return (
    <div className='container-fluid sumIndex'>
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
