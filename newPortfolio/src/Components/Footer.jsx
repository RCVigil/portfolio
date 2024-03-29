import moment from "moment";
import React from "react";

import FooterCenter from "./Footer/Center/FooterCenter";
import FooterRight from "./Footer/Right/FooterRight";
import FooterLeft from "./Footer/Left/FooterLeft";

import "../Styles/Components/footer.sass";

const Footer = () => {
  // const isMobile = window.innerWidth < 768;
  // return !isMobile ? (
  return (
    <footer id="footerAll">
      <div className="headerFooter"></div>
      <div className="maincontentFooter">
        <div className="divFooterLeft">
          <FooterLeft />
        </div>
        <div className="divFooterCenter">
          <FooterCenter />
        </div>
        <div id="divFooterRight">
          <FooterRight />
        </div>
      </div>
      <div className="divFooter">
        <span className="span1Footer">
          Copyright&nbsp;
          <i className="bi bi-c-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-c-circle"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
            </svg>
          </i>
          <span className="spanDataFooter">&nbsp;{moment().year()}&nbsp;</span>
          All Rights Reserved by <strong>Rodrigo C&V Tecnology</strong>
        </span>
        <p className="pFooter">
          <i className="bi bi-yin-yang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-yin-yang"
              viewBox="0 0 16 16"
            >
              <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z" />
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z" />
            </svg>
          </i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
