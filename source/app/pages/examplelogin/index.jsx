import React from 'react';
import Input from 'app/components/input';
import useLogin from 'app/hooks/useLogin';
import styles from './styles.css';

const Form = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useLogin();

  return (
    <div className={styles.wrapper}>

      {isLoading && (
        <h3>iniciando session</h3>
      )}

      {!isLoading && (
        <form className={styles.form} onSubmit={handleSubmit}>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          <Input name="usernameoremail" {...inputProps} placeholder="correo o nombre de usuario" />
          <Input name="password" {...inputProps} placeholder="contraseña" />
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
