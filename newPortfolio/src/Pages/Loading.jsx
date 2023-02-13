import React from 'react';
import '../Styles/Components/Loading.sass';

import loadingImage from '../images/loadingInfinity.svg'

const Loading = () => {
  return (
    <div
      className='loaderContainer d-flex align-items-end flex-column mb-3'
    >
      <img
      className='loader'
        src={loadingImage}
        alt="Loading format infinity object-fit-fill-lg-contain border rounded w-10"
      />
      <p className="h1Name text-lg-right lh-sm font-italic text-capitalize text-decoration-none text-light fs-1 text-monospace mt-4">Loading...</p>
    </div>
  );
}

export default Loading;
