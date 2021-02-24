import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import React from 'react';


const Landing = () => (
  <>
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      Bienvenido a fest code
    </h1>

    <div style={{ width: '50%', margin: 'auto' }}>

      <CarouselCreadores />

    </div>

    <div style={{ width: '50%', margin: 'auto', marginTop: '100px' }}>

      <CarouselSponsors />

    </div>
  </>
);

export default Landing;
