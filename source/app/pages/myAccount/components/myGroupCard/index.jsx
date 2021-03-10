import React from 'react';
import logo from 'app/images/Isotipo-brand.png';
import styles from './styles.css';

const MyGroupCard = () => (
  <div className={styles.groups__myGroup}>
    <header className={styles.myGroup__header}>
      <span className={styles.myGroup__headeName}>Mi grupo</span>
      <a className={styles.myGroup__headerLink} href="/">
        Ir al grupo
      </a>
    </header>

    <div className={styles.myGroup__info}>
      <h2 className={styles.myGroup__infoTitle}>Crazy Techs</h2>
      <div className={styles.myGroup__infoLanguage}>JS</div>
    </div>

    <ul className={styles.myGroup__grid}>
      <li className={styles.myGroup__gridItem}>
        <img className={styles.gridItem__avatar} src={logo} alt="avatar" />

        <span className={styles.gridItem__info}>
          <div className={styles.gridItem__infoNick}>LuisLiraC</div>
          <div className={styles.gridItem__infoSkill}>Lider</div>
        </span>

        <span className={styles.gridItem__role}>Lider</span>
      </li>

      <li className={styles.myGroup__gridItem}>
        <img className={styles.gridItem__avatar} src={logo} alt="avatar" />

        <span className={styles.gridItem__info}>
          <div className={styles.gridItem__infoNick}>JuanJo</div>
          <div className={styles.gridItem__infoSkill}>Medio</div>
        </span>

        <span className={styles.gridItem__role}>Integrante</span>
      </li>

      <li className={styles.myGroup__gridItem}>
        <img className={styles.gridItem__avatar} src={logo} alt="avatar" />

        <span className={styles.gridItem__info}>
          <div className={styles.gridItem__infoNick}>JuanSecu</div>
          <div className={styles.gridItem__infoSkill}>Novato</div>
        </span>

        <span className={styles.gridItem__role}>Integrante</span>
      </li>

      <li className={styles.myGroup__gridItem}>
        <img className={styles.gridItem__avatar} src={logo} alt="avatar" />

        <span className={styles.gridItem__info}>
          <div className={styles.gridItem__infoNick}>JCruz</div>
          <div className={styles.gridItem__infoSkill}>Novato</div>
        </span>

        <span className={styles.gridItem__role}>Integrante</span>
      </li>

      <li className={styles.myGroup__gridItem}>
        <img className={styles.gridItem__avatar} src={logo} alt="avatar" />

        <span className={styles.gridItem__info}>
          <div className={styles.gridItem__infoNick}>Fede</div>
          <div className={styles.gridItem__infoSkill}>Apenas empezando</div>
        </span>

        <span className={styles.gridItem__role}>Integrante</span>
      </li>
    </ul>

    <div className={styles.myGroup__buttons}>
      <button type="button" className={styles.myGroup__buttonsLeave}>
        Abandonar
      </button>
      <button type="button" className={styles.myGroup__buttonsChat}>
        Ir al chat
      </button>
    </div>
  </div>
);

export default MyGroupCard;
