import React from 'react';
import logo from '../../images/Isotipo-brand.png';
import styles from './styles.css';

const BadgesCard = () => (
  <div className={styles.badgesCard}>
    <h3 className={styles.badgesCard__title}>Insignias</h3>
    <div className={styles.badgesCard__wrapper}>
      <img className={styles.badgesCard__logo} src={logo} alt="badge" />
      <img className={styles.badgesCard__logo} src={logo} alt="badge" />
      <img className={styles.badgesCard__logo} src={logo} alt="badge" />
      <img className={styles.badgesCard__logo} src={logo} alt="badge" />
      <img className={styles.badgesCard__logo} src={logo} alt="badge" />
    </div>
  </div>
);

export default BadgesCard;
