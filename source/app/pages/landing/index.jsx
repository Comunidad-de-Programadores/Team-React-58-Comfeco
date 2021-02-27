import React from 'react';
import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import CommunitiesCard from 'app/components/communityCard';
import Countdown from '../../components/countdown';
import styles from './styles.css';

const Landing = () => (
  <div className={styles.wrapper}>
    <div className={styles.column}>
      <CommunitiesCard />
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>Bienvenido a Comunidad Fest</h1>
      <div className={styles.carrouselWrapper}>
        <CarouselCreadores />
      </div>
      <div className={styles.carrouselWrapper}>
        <CarouselSponsors />
      </div>
      <div className={styles.carrouselWrapper}>
        <Countdown />
      </div>
    </div>
  </div>
);

export default Landing;
