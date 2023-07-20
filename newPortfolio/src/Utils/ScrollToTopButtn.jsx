import React from "react";

import pegasusIcon from "../images/pegasus.svg";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToTopStyle = {
    border: "1px solid white",
    backgroundColor: "rgb(255,255,255,0.5)",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    height: "7vw",
    width: "4vw",
    top: "80vh",
    left: "93vw",
  };

  return (
    <div style={scrollToTopStyle} onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color="#000"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-box-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
        />
        <path
          fill-rule="evenodd"
          d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
        />
      </svg>
      <img className="imgScrollTop" src={pegasusIcon} alt="Pegasus" />
      <p style={{ color: "#000"}}>UP</p>
    </div>
  );
};

export default ScrollToTopButton;
