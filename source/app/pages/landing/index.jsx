import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import React from 'react';
import styles from './styles.css';

const Landing = () => (
  <div className={styles.wrapper}>
    <div className={styles.column}>
      communities Card
    </div>
    <div className={styles.content}>
      <CarouselCreadores />
      <CarouselSponsors />
    </div>
  </div>
);

export default Landing;
