import React from 'react';
import styles from './styles.css';
import img1 from '../../images/sini.jpg';

const Carousel = () => (
  <main>
    <div className={styles.wrapper__carousel}>

      <div className={styles.container__box}>
        <img src={img1} alt="" />
      </div>
      <div className={styles.container__box}>
        <img src={img1} alt="" />
      </div>
      <div className={styles.container__box}>
        <img src={img1} alt="" />
      </div>


    </div>
  </main>
);

export default Carousel;
