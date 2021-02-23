import React from 'react';
import styles from './styles.css';
import logo from '../../images/Isotipo-brand.png';

const CommunityCard = () => (
  <div className={styles.community}>
    <header className={styles.community__header}>
      <h3 className={styles.community__tittle}>Communidades</h3>
      <a className={styles.community__button} href="/">
        Ver más
      </a>
    </header>

    <ul className={styles.community__grid}>
      <li className={styles.community__item}>
        <div className={styles.communityItem__logo}>
          <img src={logo} alt="communityLogo" />
        </div>
        <h4 className={styles.communityItem__title}>Comunidad de Programadores</h4>

        <a className={styles.community__button} href="/">
          Unirme
        </a>
      </li>
      <hr />

      <li className={styles.community__item}>
        <div className={styles.communityItem__logo}>
          <img src={logo} alt="communityLogo" />
        </div>
        <h4 className={styles.communityItem__title}>El lenguaje de los programadores</h4>

        <a className={styles.community__button} href="/">
          Unirme
        </a>
      </li>
      <hr />

      <li className={styles.community__item}>
        <div className={styles.communityItem__logo}>
          <img src={logo} alt="communityLogo" />
        </div>
        <h4 className={styles.communityItem__title}>Latam Dev</h4>

        <a className={styles.community__button} href="/">
          Unirme
        </a>
      </li>
      <hr />
    </ul>
  </div>
);

export default CommunityCard;
