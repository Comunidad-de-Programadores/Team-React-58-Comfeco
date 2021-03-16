/* eslint-disable arrow-body-style */
import React from 'react';
import Input from 'app/components/input';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import useCreateNewPassword from '../../hooks/useCreateNewPassword';

const CreateNewPassword = () => {
  const { handleSubmit, inputProps, isLoading, isSuccess, errorMessage } = useCreateNewPassword();

  return (
    <div className={styles.fullwidth}>
      <div className={styles.paper}>
        {!isLoading && !isSuccess && (
          <form onSubmit={handleSubmit}>
            <h3 className={styles.title}>Crear nueva contraseña</h3>
            {errorMessage && (
              <div className={styles.errorMessage}>
                <i className="fas fa-exclamation fa-2x" />
                {errorMessage}
              </div>
            )}
            <div className={styles.formGroup}>
              <i className="fas fa-lock" aria-hidden="true" />
              <Input {...inputProps} name="password" placeholder="Contraseña" type="password" />
            </div>
            <div className={styles.formGroup}>
              <i className="fas fa-lock" aria-hidden="true" />
              <Input
                {...inputProps}
                name="confirmpassword"
                placeholder="repetir Contraseña"
                type="password"
              />
            </div>
            <button type="submit" className={styles.button}>
              Guardar
            </button>
          </form>
        )}
        {isLoading && !isSuccess && (
          <div className={styles.loader_wrapper}>
            <CircularProgress />
          </div>
        )}
        {isSuccess && (
          <div className={styles.success_wrapper}>
            <h3 className={styles.title}>Contraseña actualizado correctamente</h3>
            <Link to="/auth">
              <button type="submit" className={styles.button}>
                iniciar sesion
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewPassword;
