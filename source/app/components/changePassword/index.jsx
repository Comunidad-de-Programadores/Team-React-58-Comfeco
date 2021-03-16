import React from 'react';
import styles from './styles.css';

const RecoverAccount = () => (
  <main className={styles.mainContent}>
    <form className={styles.recoverPasswordForm}>
      <h1 className={styles.recoverPasswordForm__title}>Cambiar contraseña</h1>

      <div className={styles.recoverPasswordForm__content}>
        <div className={styles.formGroup}>
          <i className="fas fa-lock" aria-hidden="true" />
          <input placeholder="Nueva contraseña" type="password" name="password" />
        </div>

        <div className={styles.formGroup}>
          <i className="fas fa-lock" aria-hidden="true" />
          <input placeholder="Confirmar contraseña" type="password" name="confirmPassword" />
        </div>

        <button type="submit">Enviar</button>
      </div>
    </form>
  </main>
);

export default RecoverAccount;
