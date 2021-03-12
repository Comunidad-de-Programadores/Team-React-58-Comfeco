import React from 'react';
import styles from './styles.css';
import img404 from '../../images/404-image.svg'
import { Link } from 'react-router-dom';

const PageNotFoundCard = () => (
  <div className={styles.pageNotFound__wrapper__main}>
    <div className={styles.pageNotFound__wrapper__card}>
        {/* card */}
        <div className={styles.pageNotFound__card__divider__message}>
            <h1 className={styles.pageNotFound__card__title}>Pagina no Encontrada</h1>
            <button 
                className={styles.PageNotFoundCard__card__button}
            >
                <Link
                    to="/landing"
                >
                    Home
                </Link>
            </button>
        </div>

        <div className={styles.pageNotFound__card__divider__image}>
            <img src={img404} alt=""/>
        </div>
        
    </div>
  </div>
);

export default PageNotFoundCard;
