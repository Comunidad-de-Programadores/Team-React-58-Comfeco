import { Box } from '@material-ui/core';
import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import CommunitiesCard from 'app/components/communityCard'
import React from 'react';
import styles from './styles.css';

const Landing = () => (
  <>
    <h1 className={styles.title}>Bienvenido a Comunidad Fest</h1>
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <CommunitiesCard />
      </div>
      <div className={styles.content}>
        <div className={styles.carrouselWrapper}>
          <CarouselCreadores />
        </div>
        <div className={styles.carrouselWrapper}>
          <CarouselSponsors />
        </div>
      </div>
    </div>
  </>
);

export default Landing;
