import React from 'react';
import Input from 'app/components/input';
import useRegister from 'app/hooks/userReister';
import styles from './styles.css';

const Form = () => {
  const { errorMessage, handleSubmit, inputProps, isLoading } = useRegister();

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <h3>Cargando...</h3>
      )}

      {!isLoading && (
        <form className={styles.form} onSubmit={handleSubmit}>

          {errorMessage && (<div className={styles.errorMessage}>{errorMessage}</div>)}

          <Input className={styles.input} {...inputProps} name="username" placeholder="Nick" />
          <Input className={styles.input} {...inputProps} name="fullname" placeholder="Nombre completo" />
          <Input className={styles.input} {...inputProps} name="email" placeholder="correo" />
          <Input className={styles.input} {...inputProps} name="password" placeholder="contraseña" />
          <Input className={styles.input} {...inputProps} name="confirmpassword" placeholder="confirmar contraseña" />
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Form;
