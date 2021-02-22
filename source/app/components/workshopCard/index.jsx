/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './styles.css';

const index = () => {
  let today = new Date();

  today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <div className={styles.workshop}>
      <header className={styles.workshop__header}>
        <h3 className={styles.workshop__tittle}>Communidades</h3>
        <a className={styles.workshop__link} href="/">
          Ver más
        </a>
      </header>

      <select className={styles.workshop__filter} name="select">
        <option selected disabled>
          Talleres por areas de conocimiento
        </option>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>

      <div className={styles.workshop__dayGrid}>
        <div className={styles.workshop__dayItem}>
          <time className={styles.workshopDayItem__date} dateTime={today}>
            Hoy
          </time>

          <ul className={styles.workshop__grid}>
            <li className={styles.workshop__gridItem}>
              <div className={styles.workshopItem__status}>
                <i className="fas fa-check-circle fa-3x"></i>
              </div>

              <div className={styles.workshopItem__content}>
                <h4 className={styles.workshopItem__title}>State of javaScript</h4>
                <time dateTime="16:00">16:00 PM</time>
                <p className={styles.workshopItem__paragraph}>
                  By&nbsp;
                  <a className={styles.workshop__link} href="/">
                    Juan Pablo de la Torre
                  </a>
                </p>
              </div>
            </li>
            <hr />

            <li className={styles.workshop__gridItem}>
              <div className={`${styles.workshopItem__status} ${styles.workshopItem__waiting}`}>
                <i className="fas fa-ellipsis-h fa-2x"></i>
              </div>

              <div className={styles.workshopItem__content}>
                <h4 className={styles.workshopItem__title}>IA con Python</h4>
                <time>22:00 PM</time>
                <p className={styles.workshopItem__paragraph}>
                  By&nbsp;
                  <a className={styles.workshop__link} href="/">
                    Yesi Days
                  </a>
                </p>
              </div>
            </li>
            <hr />
          </ul>
        </div>

        <div className={styles.workshop__dayItem}>
          <time className={styles.workshopDayItem__date}>Mañana</time>

          <ul className={styles.workshop__grid}>
            <li className={styles.workshop__gridItem}>
              <div className={`${styles.workshopItem__status} ${styles.workshopItem__waiting}`}>
                <i className="fas fa-ellipsis-h fa-2x"></i>
              </div>

              <div className={styles.workshopItem__content}>
                <h4 className={styles.workshopItem__title}>State of javaScript</h4>
                <time>16:00 PM</time>
                <p className={styles.workshopItem__paragraph}>
                  By&nbsp;
                  <a className={styles.workshop__link} href="/">
                    Juan Pablo de la Torre
                  </a>
                </p>
              </div>
            </li>
            <hr />

            <li className={styles.workshop__gridItem}>
              <div className={styles.workshopItem__status}>
                <i className="fas fa-check-circle fa-3x"></i>
              </div>

              <div className={styles.workshopItem__content}>
                <h4 className={styles.workshopItem__title}>IA con Python</h4>
                <time>22:00 PM</time>
                <p className={styles.workshopItem__paragraph}>
                  By&nbsp;
                  <a className={styles.workshop__link} href="/">
                    Yesi Days
                  </a>
                </p>
              </div>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
