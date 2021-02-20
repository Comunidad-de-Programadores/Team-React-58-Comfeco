import Carousel from 'app/components/carousel';
import React from 'react';

const Landing = () => (
  <>
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      Bienvenido a fest code
    </h1>

    <div style={{ width: '50%' }}>

      <Carousel />

    </div>
  </>
);

export default Landing;
