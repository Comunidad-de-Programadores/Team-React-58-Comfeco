import useRestorePassword from 'app/hooks/useRestorePassword';
import React from 'react';
import Input from '../input';
import styles from './styles.css';

const RecoverAccount = () => {
  const { isLoading, errorMessage, handleSubmit, success, inputProps } = useRestorePassword();

  return (
    <main className={styles.mainContent}>

      {success
        ? <h3 className={styles.successMessage}>Se envio un mensaje de recuperación a su correo</h3>
        : (
          <>
            {isLoading && <h3>cargando...</h3>}

            {!isLoading
              && (
              <form className={styles.recoverPasswordForm} onSubmit={handleSubmit}>

                <h1 className={styles.recoverPasswordForm__title}>Recuperar cuenta</h1>

                {errorMessage && (
                <div className={styles.errorMessage}>
                  <i className="fas fa-exclamation fa-2x" />
                  {' '}
                  {errorMessage}
                </div>
                )}

                <div className={styles.recoverPasswordForm__content}>

                  <div className={styles.formGroup}>
                    <i className="fas fa-envelope" aria-hidden="true" />
                    <Input name="email" placeholder="Correo" type="text" {...inputProps} />
                  </div>

                  <button type="submit">Enviar</button>
                </div>
              </form>
              )}
          </>
        )}
    </main>
  );
};

export default RecoverAccount;
