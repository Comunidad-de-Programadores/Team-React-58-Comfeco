import React from 'react';
import Input from 'app/components/input';
import useLogin from 'app/hooks/useLogin';
import styles from './styles.css';

const Form = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useLogin();

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <h1>Cargando...</h1>
      )}
      {!isLoading && (
        <form className={styles.form} onSubmit={handleSubmit}>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          <Input name="usernameoremail" className={styles.input} {...inputProps} placeholder="correo o nombre de usuario" />
          <Input name="password" className={styles.input} {...inputProps} placeholder="contraseña" />
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
