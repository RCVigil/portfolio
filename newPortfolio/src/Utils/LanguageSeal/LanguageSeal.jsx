import React from "react";

import "./_languageSeal.sass";

import imageReactJs from "../../images/react.png";
import imageAngular from "../../images/Angular1.png";
import imageJava from "../../images/java1.png";
import imageCss from "../../images/css.png";
import imageJavascript from "../../images/javascript.png";
import imageHtml from "../../images/html-5.png";
import imageSass from "../../images/Sass.png";
import imageNodeJs from "../../images/nodeJs-White.png";
import imageNestJs from "../../images/NestJs.png";
import imageExpressJs from "../../images/expressJs.png";

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

export default LanguageSeal;
