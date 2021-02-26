import React from 'react';
import useCountdown from 'app/hooks/useCountdown';
import styles from './styles.css';

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown('2022-1-1');

  return (
    <div className={styles.countdown}>
      <h3 className={styles.countdown__title}>Preparate lo bueno esta por venir</h3>
      <div className={styles.countdown__content}>
        <div className={styles.countdown__time}>
          <div className={styles.time__value}>
            {days < 10 && '0'}
            {days}
          </div>
          <div className={styles.time__description}>Días</div>
        </div>

        <div className={styles.countdown__time}>
          <div className={styles.time__value}>
            {hours < 10 && '0'}
            {hours}
          </div>
          <div className={styles.time__description}>Horas</div>
        </div>

        <div className={styles.countdown__time}>
          <div className={styles.time__value}>
            {minutes < 10 && '0'}
            {minutes}
          </div>
          <div className={styles.time__description}>Minutos</div>
        </div>

        <div className={styles.countdown__time}>
          <div className={styles.time__value}>
            {seconds < 10 && '0'}
            {seconds}
          </div>
          <div className={styles.time__description}>Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
