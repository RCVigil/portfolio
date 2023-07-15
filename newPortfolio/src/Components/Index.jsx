import React from 'react';

import '../Styles/Components/index.sass'

import Header from './Header';
import AsideLeft from './Aside-Left'
import Notebook from '../Utils/Notebook';
import PrincipaisSatcks from '../Utils/PrincipaisSatcks';
import ProjetosGithub from '../Pages/ProjetosGithub';
import Footer from './Footer';
// import NoteApple from '../images/noteApple.jpg'

const Index = () => {
  return (
    <div
      className='sumIndex'
    >
      <Header/>
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <main className="body-site">
        <div className="firstNotebook-index">
          <Notebook/>
        </div>
        <ProjetosGithub/>
        <PrincipaisSatcks/>
      </main>
      <Footer/>
    </div>
  );
}

export default Index;
