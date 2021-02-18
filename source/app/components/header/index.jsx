import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import isotipo from '../../images/Isotipo-brand.png';
import logo1 from '../../images/logo1.png';
import Button from './Button';
import styles from './styles.css';

const Header = () => {
  const location = useLocation().pathname;
  const locationToShow = '/recoverAccount';

  return (
    <>
      <header className={styles.mainHeader}>
        <picture className={styles.mainHeader__logo}>
          <source media="(min-width: 768px)" srcSet={logo1} />
          <img src={isotipo} alt="comfeco" />
        </picture>

        <div className={styles.mainHeader__buttons}>
          {location === locationToShow && (
          <Link to="/login">
            <Button type="button">Iniciar Sesión</Button>
          </Link>
          )}
        </div>

      </header>
      <hr className={styles.mainHeader__underline} />
    </>
  );
};

export default Header;
