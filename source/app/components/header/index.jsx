/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import useSession from '../../hooks/useSession';
import { Link, useLocation } from 'react-router-dom';
import isotipo from '../../images/Isotipo-brand.png';
import logo1 from '../../images/logo1.png';
import styles from './styles.css';

const Header = () => {
  const { session } = useSession();
  const [showOptions, setShowOptions] = useState(false);
  const location = useLocation().pathname;
  const locationToShow = '/recover-account';

  return (
    <header className={styles.mainHeader}>
      <div className={styles.wrapper}>
        <picture className={styles.mainHeader__logo}>
          <source media="(min-width: 1024px)" srcSet={logo1} />
          <img src={isotipo} alt="comfeco" />
        </picture>

        <nav className={styles.mainHeader__navigation}>
          <a className={styles.navigation__link} href="/">
            Inicio
          </a>
          <a className={styles.navigation__link} href="/">
            Comunidades
          </a>
          <a className={styles.navigation__link} href="/">
            Talleres
          </a>
          <a className={styles.navigation__link} href="/">
            Creadores de contenido
          </a>
        </nav>

        <div className={styles.mainHeader__buttons}>
          {location !== locationToShow && (
            <div className={styles.dropdown__wrapper}>
              <div className={styles.dropdown}>
                <span className={styles.dropdown__avatar}>
                  {session ? (
                    session.username.charAt(0).toUpperCase()
                  ) : (
                    <i className="fas fa-user fa-2x"></i>
                  )}
                </span>
                <span className={styles.dropdown__name}>
                  {session ? session.username : 'invitado'}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  <i className={`fas fa-chevron-down ${styles.dropdown__icon}`}></i>
                </button>
              </div>

              {showOptions && (
                <ul className={styles.dropdown__options}>
                  <li className={styles.options__item}>
                    <a href="/">test</a>
                  </li>
                  <li className={styles.options__item}>
                    <a href="/">test</a>
                  </li>
                </ul>
              )}
            </div>
          )}

          {location === locationToShow && (
            <Link to="/auth">
              <button type="button">Iniciar Sesión</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
