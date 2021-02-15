import React from 'react';
import { Link } from 'react-router-dom';
import isotipo from '../../images/Isotipo-brand.png';
import logo1 from '../../images/logo1.png';
import Button from './Button';
import styles from './styles.css';

const Header = () => (
  <>
    <header className={styles.mainHeader}>
      <picture className={styles.mainHeader__logo}>
        <source media="(min-width: 768px)" srcSet={logo1} sizes="" />
        <img src={isotipo} alt="" srcSet="" />
      </picture>

      <div className={styles.mainHeader__buttons}>
        <Link to="/login">
          <Button type="button">Iniciar Sesión</Button>
        </Link>
      </div>

    </header>
    <hr className={styles.mainHeader__underline} />
  </>
);

export default Header;
