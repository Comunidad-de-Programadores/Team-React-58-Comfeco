import React from 'react';
import styles from './styles.css';

const SignIn = () => (
  <form className={styles.signInForm}>

    <h1 className={styles.signInForm__title}>Registro</h1>

    <div className={styles.signInForm__content}>

      <div className={styles.formGroup}>
        <i className="fas fa-user" aria-hidden="true" />
        <input name="nick" type="text" placeholder="Nick" />
      </div>

      <div className={styles.formGroup}>
        <i className="fas fa-envelope" aria-hidden="true" />
        <input type="email" placeholder="Correo electronico" />
      </div>

      <div className={styles.formGroup}>
        <i className="fas fa-lock" aria-hidden="true" />
        <input type="password" placeholder="Contraseña" />
      </div>

      <div className={styles.formGroup}>
        <i className="fas fa-lock" aria-hidden="true" />
        <input type="password" placeholder="Corfirmar Contraseña" />
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

  </form>
);

export default SignIn;
