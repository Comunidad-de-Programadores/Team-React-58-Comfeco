import React from 'react';
import img from '../../images/activity.svg';
import styles from './styles.css';

const ActivityCard = () => (
  <div className={styles.activityCard}>
    <h3 className={styles.activityCard__title}>Actividad reciente</h3>
    <ul className={styles.activityCard__wrapper}>
      <li className={styles.activityCard__item}>
        <p className={styles.activity__message}>Te has unido al evento Community Fest and Code</p>
        <img className={styles.activity__img} src={img} alt="activity" />
      </li>

      <li className={styles.activityCard__item}>
        <p className={styles.activity__message}>Te has unido al evento Community Fest and Code</p>
        <img className={styles.activity__img} src={img} alt="activity" />
      </li>
    </ul>
  </div>
);

export default ActivityCard;
