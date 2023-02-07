import React from 'react';
import '../Styles/Components/Loading.sass';

import loadingImage from '../images/loadingInfinity.svg'

const Loading = () => {
  return (
    <div
      className='loaderContainer d-flex container-fluid col border border-info rounded p-2 m-1 flex-fill flex-grow-1'
    >
      <img
      className='loader'
        src={loadingImage}
        alt="Loading format infinity"
      />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
