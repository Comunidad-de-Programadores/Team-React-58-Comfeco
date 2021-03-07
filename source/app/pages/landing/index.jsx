import React from 'react';
import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import CommunitiesCard from 'app/components/communityCard';
import Countdown from '../../components/countdown';
import styles from './styles.css';
import FormEditPerfil from 'app/components/formEditPerfil/index';

const Landing = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.column}>
        <CommunitiesCard />
      </div>
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
