import useRegister from 'app/hooks/userReister';
import React from 'react';
import Input from '../input';
import styles from './styles.css';

const SignIn = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useRegister();

  return (
    <form className={styles.signInForm} onSubmit={handleSubmit}>

      {isLoading && (
        <h3>Cargando</h3>
      )}

      {!isLoading && (
      <>

        <h1 className={styles.signInForm__title}>Registro</h1>

        {errorMessage && (<div className={styles.errorMessage}>{errorMessage}</div>)}

        <div className={styles.signInForm__content}>

          <div className={styles.formGroup}>
            <i className="fas fa-user" aria-hidden="true" />
            <Input className={styles.input} placeholder="Nick" {...inputProps} name="username" />
          </div>

          <div className={styles.formGroup}>
            <i className="fas fa-user" aria-hidden="true" />
            <Input className={styles.input} placeholder="Nombre completo" {...inputProps} name="fullname" />
          </div>

          <div className={styles.formGroup}>
            <i className="fas fa-envelope" aria-hidden="true" />
            <Input className={styles.input} placeholder="Correo" {...inputProps} name="email" />
          </div>

          <div className={styles.formGroup}>
            <i className="fas fa-lock" aria-hidden="true" />
            <Input className={styles.input} placeholder="contraseña" {...inputProps} name="password" />
          </div>

          <div className={styles.formGroup}>
            <i className="fas fa-lock" aria-hidden="true" />
            <Input className={styles.input} placeholder="confirmar contraseña" {...inputProps} name="confirmpassword" />
          </div>

          <button type="submit">Crear una cuenta</button>

          <p className={styles.signInForm__policies}>
            Al registrarse estas aceptando los
            {' '}
            <a href="/" target="blank">Términos y Condiciones</a>
            {' '}
            y la
            {' '}
            <a href="/">Politica de privacidad y proteccion de datos</a>
            {' '}
            de COMFECO
          </p>
        </div>
      </>
      )}

    </form>
  );
};

export default SignIn;
