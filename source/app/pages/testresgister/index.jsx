import React from 'react';
import Input from 'app/components/input';
import useRegister from 'app/hooks/userReister';
import styles from './styles.css';

const Form = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useRegister();

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
          <Input name="username" className={styles.input} {...inputProps} placeholder="Nick" />
          <Input name="fullname" className={styles.input} {...inputProps} placeholder="Nombre completo" />
          <Input name="email" className={styles.input} {...inputProps} placeholder="correo" />
          <Input name="password" className={styles.input} {...inputProps} placeholder="contraseña" />
          <Input name="confirmpassword" className={styles.input} {...inputProps} placeholder="confirmar contraseña" />
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
