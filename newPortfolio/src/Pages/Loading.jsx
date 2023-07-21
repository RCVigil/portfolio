import React from "react";
import "../Styles/Components/Loading.sass";

import loadingImage from "../images/loadingInfinity.svg";

const Loading = () => {
  return (
    <div className="loaderContainer">
      <img
        className="loader"
        src={loadingImage}
        alt="Loading format infinity object-fit-fill-lg-contain border rounded w-10"
      />
      <p className="h1Name">Loading...</p>
    </div>
  );
};

export default Loading;
