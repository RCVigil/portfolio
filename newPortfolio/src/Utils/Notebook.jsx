import React from "react";
import "../Styles/Utils/Notebook.sass";

const Notebook = () => {
  return (
    <section className="divImgNoteb">
      <div className="pImgNote">
        <p className="p-saudacao">Olá!</p>
        <p className="p-saudacao">Seja muito bem-vindo(a) ao nosso site.</p>
        <p className="p-saudacao">
          Meu nome é Rodrigo Cuervo e sou um desenvolvedor web Fullstack com
          ampla experiência em JavaScript, ReactJS, TypeScript, Sass, Node.js,
          Nest, SQL e NoSQL. Estou aqui para oferecer soluções tecnológicas de
          alta qualidade e ajudar você a alcançar seus objetivos.
        </p>
        <div className="p-espacamentoN"></div>
        <p className="p-saudacao">
          Ao longo da minha carreira, tive o privilégio de trabalhar em diversos
          projetos desafiadores, nos quais pude aprimorar minhas habilidades e
          conhecimentos. Estou sempre atualizado com as últimas tendências e
          melhores práticas do mercado, buscando entregar resultados
          excepcionais.
        </p>
        <p className="p-saudacao">
          Aqui, você encontrará uma variedade de serviços que posso oferecer,
          desde o desenvolvimento de sites e aplicações web até a consultoria em
          projetos complexos. Cada projeto é tratado com dedicação e atenção aos
          detalhes, garantindo que suas necessidades sejam atendidas de forma
          eficiente.
        </p>
        {/* <p className="p-saudacao">
          Além disso, estou aqui para compartilhar meu conhecimento e
          experiência. No blog, você encontrará artigos e dicas sobre
          desenvolvimento web, juntamente com insights valiosos para ajudá-lo(a)
          a entender melhor o mundo da programação.
        </p> */}
        <p className="p-saudacao">
          Se você tiver alguma dúvida, não hesite em entrar em contato comigo.
          Estou disponível para responder suas perguntas, fornecer orientação e
          oferecer suporte personalizado de acordo com suas necessidades
          específicas.
        </p>
        <p className="p-saudacao">
          Agradeço por visitar o site e espero ter a oportunidade de trabalhar
          com você em seu próximo projeto. Estou animado para fazer parte do seu
          sucesso e ajudá-lo(a) a alcançar resultados incríveis.
        </p>
        <p className="p-saudacao">Atenciosamente,</p>
        <p className="p-saudacao">Rodrigo Cuervo</p>
        <p className="p-saudacao">Desenvolvedor Fullstack.</p>
      </div>
    </section>
  );
};

export default Notebook;
