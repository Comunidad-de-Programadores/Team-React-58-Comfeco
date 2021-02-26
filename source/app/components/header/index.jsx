import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import isotipo from '../../images/Isotipo-brand.png';
import logo1 from '../../images/logo1.png';
import Button from './Button';
import styles from './styles.css';

const Header = () => {
  const location = useLocation().pathname;
  const locationToShow = '/recover-account';

  return (
    <header className={styles.mainHeader}>
      <div className={styles.wrapper}>
        <picture className={styles.mainHeader__logo}>
          <source media="(min-width: 768px)" srcSet={logo1} />
          <img src={isotipo} alt="comfeco" />
        </picture>

        <div className={styles.mainHeader__buttons}>
          {location === locationToShow && (
            <Link to="/auth">
              <Button type="button">Iniciar Sesión</Button>
            </Link>
          )}
        </div>
      </div>
      <hr className={styles.mainHeader__underline} />
    </header>
  );
};

export default Header;
