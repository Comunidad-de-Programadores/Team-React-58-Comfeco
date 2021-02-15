import React from 'react';
import styles from './styles.css';

const SignUp = () => (
  <form className={styles.signInForm}>

    <h1 className={styles.signInForm__title}>Registro</h1>

    <div className={styles.signInForm__content}>

      <div className={styles.formGroup}>
        <i className="fas fa-envelope" aria-hidden="true" />
        <input name="email" type="email" placeholder="Correo electronico" />
      </div>

      <div className={styles.formGroup}>
        <i className="fas fa-lock" aria-hidden="true" />
        <input name="password" type="password" placeholder="Contraseña" />
      </div>

      <button type="submit">Ingresar</button>

    </div>

  </form>
);

export default SignUp;
