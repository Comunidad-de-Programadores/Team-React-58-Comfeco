/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { func } from 'prop-types';
import React from 'react';
import styles from './styles.css';

const PerfilCard = ({ onEditProfile }) => (
  <div className={styles.wapper__container}>
    <div>
      <h6 onClick={onEditProfile}>Editar Perfil</h6>
    </div>
    <div className={styles.wrapper__circle__nickpic}>
      <div className={styles.circle__nickpic}>item</div>
    </div>
    <div className={styles.description__wrapper}>
      <h4>Nick del usuario</h4>
      <h5>Fronted Developer / UI/UX</h5>
    </div>
    <div className={styles.biography__wrapper}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora, explicabo ex a
        aspernatur autem officiis praesentium ut sapiente ipsa cum, quaerat pariatur qui atque vero
        ratione voluptatum. Expedita, accusamus.
      </p>
    </div>
    <div className={styles.wrapper__insignias}>
      <div className={styles.circle__insinia} />
      <div className={styles.circle__insinia} />
      <div className={styles.circle__insinia} />
      <div className={styles.circle__insinia} />
    </div>
  </div>
);

PerfilCard.propTypes = {
  onEditProfile: func.isRequired,
};

export default PerfilCard;
