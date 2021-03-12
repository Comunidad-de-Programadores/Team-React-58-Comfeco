/* eslint-disable prettier/prettier */
import { ButtonBase } from '@material-ui/core';
import { string, instanceOf, bool, func } from 'prop-types';
import React from 'react';
import limitText from '../../../../helpers/limitText';
import styles from './styles.css';

const Eventcard = ({ image, name, description, date, joined, onEventAdd, id, onEventLeave }) => (
  <div className={styles.wrapper}>
    <img src={image} className={styles.image} alt="event cover" />
    <div className={styles.dataWrapper}>
      <div className={styles.title}>{name}</div>
      <div className={styles.date}>{new Date(date).toLocaleDateString()}</div>
      <div className={styles.description}>{limitText(description, 200)}</div>
      <div className={styles.actionWrapper}>
        <ButtonBase className={styles.button}>Mas información</ButtonBase>
        {!joined && <ButtonBase className={styles.buttonAction} onClick={() => onEventAdd(id)}>Participar</ButtonBase>}
        {joined && <ButtonBase className={`${styles.buttonAction} ${styles.buttonActionLeave}`} onClick={() => onEventLeave(id)}>Salir</ButtonBase>}
      </div>
    </div>
  </div>
);

Eventcard.defaultProps = {
  joined: false,
}

Eventcard.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  date: instanceOf(Date).isRequired,
  joined: bool,
  onEventAdd: func.isRequired,
  onEventLeave: func.isRequired,
  id: string.isRequired,
}

export default Eventcard;
