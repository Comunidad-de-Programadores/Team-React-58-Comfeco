import React from 'react';
import styles from './style.css';

const Form = () => (
  <div className={styles.wrapper}>
    <div className={styles.main}>
      {/*------------------------------------------*/
        /* --Form Registrarse--*/
        /*------------------------------------------*/}
      <div className={styles.main__wrapper__form}>

        {/*------------------------------------------*/
          /* --Form Iniciar Sesión--*/
          /*------------------------------------------*/}
        <form className={`${styles.main__form} ${styles.login__mode}`} action="#">
          <div className={styles.main__form__titleSelection}>
            <h1 className={styles.h1}>Iniciar Sesión</h1>
            <h1
              className={styles.h1}
            >
              Regitrarse
            </h1>
          </div>
          <div className={styles.main__form__inputField}>
            <i className="fas fa-user" aria-hidden="true" />
            <input type="text" className={styles.input} placeholder="Nick name o Correo Electronico" />
          </div>
          <div className={styles.main__form__inputField}>
            <i className="fas fa-lock" aria-hidden="true" />
            <input type="password" className={styles.input} placeholder="Contraseña" />
          </div>
          <input type="submit" value="Iniciar sesion" className={`${styles.btn} ${styles.btn_input}`} />
          <p>
            Al registrarse estas aceptando los
            <a href="/" target="blank">Términos y Condiciones</a>
            y la
            <a
              href="/"
            >
              Politica de privacidad y proteccion de datos
            </a>
            {' '}
            de COMFECO
          </p>
        </form>
      </div>
    </div>
    {/*------------------------------------------*/
      /* --Footer--*/
      /*------------------------------------------*/}
  </div>

);

export default Form;
