import React from "react";

import PropTypes from "prop-types";

import "./_languageSeal.sass";

import imageAngular from "../../images/Angular1.png";
import imageNestJs from "../../images/NestJs.png";
import imageSass from "../../images/Sass.png";
import imageCss from "../../images/css3_Icon.svg";
import imageExpressJs from "../../images/expressJs.png";
import imageHtml from "../../images/html5_Icon.svg";
import imageJava from "../../images/java1.png";
import imageJavascript from "../../images/javascript.png";
import imageNodeJs from "../../images/nodeJs-White.png";
import imageReactJs from "../../images/react.png";

function LanguageSeal({ topicos }) {
  const linguagens = topicos;

  return (
    <div className="languageSeal__container">
      {linguagens.map((topic, index) => {
        let contentImage = "";
        let contentAltSeal = "";

        switch (topic) {
          case "angular":
            contentImage = imageAngular;
            contentAltSeal = "Imagem do Angular";
            break;
          case "reactjs":
            contentImage = imageReactJs;
            contentAltSeal = "Imagem do React";
            break;
          case "react":
            contentImage = imageReactJs;
            contentAltSeal = "Imagem do React";
            break;
          case "css":
            contentImage = imageCss;
            contentAltSeal = "Imagem do CSS";
            break;
          case "java":
            contentImage = imageJava;
            contentAltSeal = "Imagem do Java";
            break;
          case "javascript":
            contentImage = imageJavascript;
            contentAltSeal = "Imagem do JavaScript";
            break;
          case "html":
            contentImage = imageHtml;
            contentAltSeal = "Imagem do HTML";
            break;
          case "sass":
            contentImage = imageSass;
            contentAltSeal = "Imagem do Sass";
            break;
          case "scss":
            contentImage = imageSass;
            contentAltSeal = "Imagem do Sass";
            break;
          case "nodejs":
            contentImage = imageNodeJs;
            contentAltSeal = "Imagem do NodeJS";
            break;
          case "nestjs":
            contentImage = imageNestJs;
            contentAltSeal = "Imagem do NestJS";
            break;
          case "express":
            contentImage = imageExpressJs;
            contentAltSeal = "Imagem do ExpressJS";
            break;
          default:
            contentImage = "";
            contentAltSeal = "";
            break;
        }

        return (
          <img
            key={index}
            src={contentImage}
            alt={contentAltSeal}
            className="languageSeal__image"
          />
        );
      })}
    </div>
  );
}

LanguageSeal.propTypes = {
  topicos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LanguageSeal;
