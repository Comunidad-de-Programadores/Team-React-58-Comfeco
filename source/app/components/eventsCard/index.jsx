import React from 'react';
import logo from '../../images/logo.svg';
import styles from './styles.css';

const EventsCard = () => (
  <div className={styles.eventsCard}>
    <header className={styles.eventsCard__header}>
      <h4 className={styles.eventsCard__title}>Eventos de tu interes</h4>
      <a className={styles.eventsCard__link} href="/">
        Ver más
      </a>
    </header>
    <ul className={styles.eventsCard__wrapper}>
      <li className={styles.eventsCard__item}>
        <img className={styles.event__logo} src={logo} alt="" />
        <div className={styles.event__content}>
          <h5 className={styles.event__title}>Community Fest and Code</h5>
          <div className={styles.event__buttons}>
            <button type="button">Abandonar</button>
            <button type="button">Más informacion</button>
          </div>
        </div>
      </li>
      <li className={styles.eventsCard__item}>
        <img className={styles.event__logo} src={logo} alt="" />
        <div className={styles.event__content}>
          <h5 className={styles.event__title}>Community Fest and Code</h5>
          <div className={styles.event__buttons}>
            <button type="button">Abandonar</button>
            <button type="button">Más informacion</button>
          </div>
        </div>
      </li>
      <li className={styles.eventsCard__item}>
        <img className={styles.event__logo} src={logo} alt="" />
        <div className={styles.event__content}>
          <h5 className={styles.event__title}>Community Fest and Code</h5>
          <div className={styles.event__buttons}>
            <button type="button">Abandonar</button>
            <button type="button">Más informacion</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default EventsCard;
