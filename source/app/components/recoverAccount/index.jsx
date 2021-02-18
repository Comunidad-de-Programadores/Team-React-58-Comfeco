import React from 'react';
import styles from './styles.css';

const RecoverAccount = () => (
  <main className={styles.mainContent}>
    <form className={styles.recoverPasswordForm}>

      <h1 className={styles.recoverPasswordForm__title}>Recuperar cuenta</h1>
      <div className={styles.recoverPasswordForm__content}>

        <div className={styles.formGroup}>
          <i className="fas fa-envelope" aria-hidden="true" />
          <input placeholder="Correo" type="text" name="email" />
        </div>

        <button type="submit">Enviar</button>

      </div>
    </form>
  </main>
);

export default RecoverAccount;
