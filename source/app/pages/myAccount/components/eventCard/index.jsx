/* eslint-disable prettier/prettier */
import { ButtonBase } from '@material-ui/core';
import { string } from 'prop-types';
import React from 'react';
import limitText from '../../../../helpers/limitText';
import styles from './styles.css';

const Eventcard = ({ image, name, description }) => (
  <div className={styles.wrapper}>
    <img src={image} className={styles.image} alt="event cover" />
    <div className={styles.dataWrapper}>
      <div className={styles.title}>{name}</div>
      <div className={styles.description}>{limitText(description, 200)}</div>
      <div className={styles.actionWrapper}>
        <ButtonBase className={styles.button}>Mas información</ButtonBase>
        <ButtonBase className={styles.buttonAction}>Participar</ButtonBase>
      </div>
    </div>
  </div>
);

Eventcard.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  description: string.isRequired
}

export default Eventcard;
