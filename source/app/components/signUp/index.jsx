import React from 'react';
import useLogin from 'app/hooks/useLogin';
import Input from '../input';
import styles from './styles.css';

const SignUp = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useLogin();

  return (

    <form className={styles.signUpForm} onSubmit={handleSubmit}>

      {isLoading && (
        <h3>iniciando session</h3>
      )}

      {!isLoading && (
        <>
          <h1 className={styles.signUpForm__title}>Iniciar Sesión</h1>

          {errorMessage && (
            <div className={styles.errorMessage}>
              <i className="fas fa-exclamation fa-2x" />
              {' '}
              {errorMessage}
            </div>
          )}

          <div className={styles.signUpForm__content}>

            <div className={styles.formGroup}>
              <i className="fas fa-envelope" aria-hidden="true" />
              <Input placeholder="Correo" {...inputProps} name="usernameoremail" />
            </div>

            <div className={styles.formGroup}>
              <i className="fas fa-lock" aria-hidden="true" />
              <Input placeholder="Contraseña" {...inputProps} name="password" />
            </div>

            <button type="submit">Ingresar</button>

          </div>
        </>
      )}

    </form>
  );
};

export default SignUp;
