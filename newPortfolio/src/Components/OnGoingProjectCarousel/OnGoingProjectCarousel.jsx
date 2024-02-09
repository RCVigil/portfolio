import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import loginTelaInit from "../../images/loginTela.png";
import dashboardTela from "../../images/dashboardAdmin.png";
import suppliersTelaInit from "../../images/Fornecedores.png";
import salesTela from "../../images/Vendas.png";
import productCardTela from "../../images/cadastroDeProdutos1.png";
import productListTela from "../../images/CadastroDeProdutos2.png";
import cashTela from "../../images/Caixa.png";
import clientTela from "../../images/Clientes.png";

import "./_onGoingProjectCarousel.sass";

const carouselData = [
  {
    id: 1,
    image: loginTelaInit,
    caption: "Login",
  },
  {
    id: 2,
    image: dashboardTela,
    caption: "Dashboard",
  },
  {
    id: 3,
    image: suppliersTelaInit,
    caption: "Fornecedores",
  },
  {
    id: 4,
    image: salesTela,
    caption: "Vendas / Orçamentos",
  },
  {
    id: 5,
    image: productCardTela,
    caption: "Produtos em formato de Cards",
  },
  {
    id: 6,
    image: productListTela,
    caption: "Produtos em formato de Lista",
  },
  {
    id: 7,
    image: cashTela,
    caption: "Caixa",
  },
  {
    id: 8,
    image: clientTela,
    caption: "Cliente",
  },
];

const OnGoingProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section
      className="Content__OnGoingProjectCarousel"
      aria-labelledby="Saas-erp-title"
    >
      <h2>Projeto em destaque - Saas - Comercial</h2>
      <Carousel
        role="region"
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        // showThumbs={false}
        infiniteLoop
        autoPlay
        stopOnHover={true}
        interval={8000}
        transitionTime={8000}
      >
        {carouselData.map((item, index) => (
          <div
            key={`${item.id} - ${index}`}
            className={`content__div_ImgP__OnGoingProjectCarousel content__div${index}_ImgP__OnGoingProjectCarousel`}
            title={item.caption}
          >
            <img src={item.image} alt={item.caption} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OnGoingProjectCarousel;
