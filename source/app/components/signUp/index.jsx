import useLogin from 'app/hooks/useLogin';
import React from 'react';
import Input from '../input';
import styles from './styles.css';

const SignUp = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useLogin();

  return (

    <form className={styles.signInForm} onSubmit={handleSubmit}>

      {isLoading && (
        <h3>iniciando session</h3>
      )}

      {!isLoading && (
        <>
          <h1 className={styles.signInForm__title}>Iniciar Sesión</h1>

          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

          <div className={styles.signInForm__content}>

            <div className={styles.formGroup}>
              <i className="fas fa-envelope" aria-hidden="true" />
              <Input placeholder="Correo electronico" {...inputProps} name="usernameoremail" />
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
