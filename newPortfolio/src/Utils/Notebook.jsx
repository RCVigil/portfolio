import React from 'react';
// import note from '../images/notebook.jpg'
import '../Styles/Utils/Notebook.sass';

const Notebook = () => {
  return (
    <section
      className='divImgNoteb d-flex justify-content-evenly flex-wrap'
    >
      <div className="pImgNote d-flex flex-column mb-3">
        <p className='text-uppercase fs-2 fw-bolder font-monospace float-sm-start title align-self-center '>
          Seja bem-vindo(a) ao nosso espaço!
        </p>
        <p className='float-sm-start fs-4 lh-sm pNote align-self-center'>
          Aqui te mostrarei toda minha carreira! Desenvolvendo meus projetos com amor e carinho, sempre tendo como <cite title="Source Title">meta a evolução!</cite>
        </p>
      </div>
      {/* <img
        className='object-fit-xxl imgNote'
        src={note}
        alt="imagem de notebook"
      /> */}
    </section>
  );
}

export default Notebook;
