/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './styles.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__seccion1}>
      <p>Fest And Code</p>
    </div>

    <div className={styles.footer__seccion2}>
      <p>Team #58 React</p>
    </div>

    <div className={styles.footer__social}>

      <ul className={styles.social__grid}>
        <li className={styles.social__item}>
          <a href="/">
            <i className={`${'fab fa-facebook-square fa-3x'} ${styles.facebook}`}></i>
          </a>
        </li>

        <li className={styles.social__item}>
          <a href="/">
            <i className={`${'fab fa-twitter-square fa-3x'} ${styles.twitter}`}></i>
          </a>
        </li>

        <li className={styles.social__item}>
          <a href="/">
            <i className={`${'fab fa-github fa-3x'} ${styles.github}`}></i>
          </a>
        </li>

      </ul>
    </div>
  </footer>
);

export default Footer;
