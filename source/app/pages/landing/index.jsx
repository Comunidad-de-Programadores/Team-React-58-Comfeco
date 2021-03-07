import React from 'react';
import CarouselCreadores from 'app/components/carousel/index-creadores';
import CarouselSponsors from 'app/components/carousel/index-sponsors';
import CommunitiesCard from 'app/components/communityCard';
import Countdown from '../../components/countdown';
import styles from './styles.css';
import semiCircleSvg from '../../images/semiCircleLandingAsset.svg';

const Landing = () => (
  <div className={styles.wrapper}>
    
    {/* header */}
    <div className={styles.svg__header}>

      <img src={semiCircleSvg} alt=""/>

      <div className={styles.header__content}>

        <h1>Bienvenido a Fest And Code</h1>
        <h3>Conoce gente Aprende y Gana</h3>

      </div>

      <div className={styles.carrouselCreadoresWrapper}>
        <CarouselCreadores />
      </div>

    </div>

    {/* content */}
    <div className={styles.wrapper__content}>

      <div className={styles.content}>

        {/* side */}
        <div className={styles.column}>
          <CommunitiesCard />
        </div>

        {/* center */}


        <div className={styles.wrapper__center}>
          
          <div className={styles.carrouselWrapper}>
            <CarouselSponsors />
          </div>
          <div className={styles.carrouselWrapper}>
            <Countdown />
          </div>
        </div>


        {/* side */}
        <div className={styles.column}>
          {/* <CommunitiesCard /> */}
        </div>

      </div>

    </div>

  </div>
);

export default Landing;
