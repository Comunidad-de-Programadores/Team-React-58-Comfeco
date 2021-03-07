/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { func, string } from 'prop-types';
import React from 'react';
import styles from './styles.css';

const NavBarEditPerfil = ({ currentView, onViewChange }) => {

  const ButtonComposed = (props) => (
    <button
      onClick={() => props.onViewChange(props.name)}
      className={props.currentView === props.name ? styles.buttonSelected : styles.button}
      type="button"
    >
      {props.label}
    </button>
  );

  return (
    <div className={styles.wrapper__container}>
      <div className={styles.container}>
        <ButtonComposed onViewChange={onViewChange} currentView={currentView} name="profile" label="Mi perfil" />
        <ButtonComposed onViewChange={onViewChange} currentView={currentView} name="badges" label="Insignias" />
        <ButtonComposed onViewChange={onViewChange} currentView={currentView} name="groups" label="Grupos" />
        <ButtonComposed onViewChange={onViewChange} currentView={currentView} name="events" label="Eventos" />
      </div>
    </div>
  );
};

NavBarEditPerfil.propTypes = {
  currentView: string.isRequired,
  onViewChange: func.isRequired,
};

export default NavBarEditPerfil;
