/* eslint-disable react/self-closing-comp */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useSession from '../../hooks/useSession';
import isotipo from '../../images/Isotipo-brand.png';
import logo1 from '../../images/logo1.png';
import styles from './styles.css';

const Dropdown = ({ username }) => {
  const { closeSession } = useSession();
  const dropdown = useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    const isOutside = (e) => {
      if (!dropdown.current.contains(e.target)) {
        setTimeout(() => setShowOptions(false), 200);
      }
    };

    document.addEventListener('mousedown', isOutside);
    return () => document.removeEventListener('mousedown', isOutside);
  }, []);

  return (
    <div className={styles.dropdown__wrapper}>
      <div className={styles.dropdown}>
        <span className={styles.dropdown__avatar}>
          <i className="fas fa-user"></i>
        </span>
        <span className={styles.dropdown__name}>{username}</span>

        <button ref={dropdown} type="button" onClick={handleToggle}>
          <i className={`fas fa-chevron-down ${styles.dropdown__icon}`}></i>
        </button>
      </div>

      {showOptions && (
        <ul className={styles.dropdown__options}>
          <li className={styles.options__item}>
            <Link to="/my-account">Mi perfil</Link>
          </li>
          <li className={styles.options__item}>
            <button
              type="button"
              onClick={() => {
                setTimeout(() => {
                  closeSession();
                }, 200);
              }}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  username: PropTypes.string.isRequired,
};

const Header = () => {
  const { session } = useSession();

  return (
    <header className={styles.mainHeader}>
      <div className={styles.wrapper}>
        <picture className={styles.mainHeader__logo}>
          <source media="(min-width: 1024px)" srcSet={logo1} />
          <img src={isotipo} alt="comfeco" />
        </picture>

        <nav className={styles.mainHeader__navigation}>
          <Link className={styles.navigation__link} to="/">
            Inicio
          </Link>
          <Link className={styles.navigation__link} to="/communities">
            Comunidades
          </Link>
          <Link className={styles.navigation__link} to="/">
            Talleres
          </Link>
          <Link className={styles.navigation__link} to="/">
            Creadores de contenido
          </Link>
        </nav>

        <div className={styles.mainHeader__buttons}>
          {!session ? (
            <Link to="/auth">
              <button type="button">Iniciar Sesión</button>
            </Link>
          ) : (
            <div className={styles.bell_dropdown}>
              <i className={`far fa-bell fa-2x ${styles.bell_dropdown_icon}`}></i>
              <Dropdown username={session.username} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
