import React from 'react';
import styles from './style.css';
import logo from './logo.svg';

const App = () => (
  <div className={styles.wrapper}>
    {/*------------------------------------------*/
      /* --Header--*/
      /*------------------------------------------*/}
    <div className={styles.header}>
      <img src={logo} alt="logo" />

    </div>

    {/*------------------------------------------*/
      /* --main--*/
      /*------------------------------------------*/}
    <div className={styles.main}>
      {/*------------------------------------------*/
        /* --Form Registrarse--*/
        /*------------------------------------------*/}
      <div className={styles.main__wrapper__form}>
        <form className={`${styles.main__form} ${styles.singUp__mode}`} action="#">
          <div className={styles.main__form__titleSelection}>
            <h1
              className={styles.h1}
              onClick={function () {
                document.querySelector('.login__mode').style.visibility = 'visible';
                document.querySelector('.singUp__mode').style.visibility = 'hidden';
              }}
            >
              Iniciar Sesión
            </h1>
            <h1 className={styles.h1}>Regitrarse</h1>
          </div>

          <div className={styles.main__form__inputField}>
            <i className="fas fa-user" aria-hidden="true" />
            <input type="text" className={styles.input} placeholder="Nick name" />
          </div>
          <div className={styles.main__form__inputField}>
            <i className="fas fa-envelope" aria-hidden="true" />
            <input type="email" className="input" placeholder="Correo Electronico" />
          </div>
          <div className={styles.main__form__inputField}>
            <i className="fas fa-lock" aria-hidden="true" />
            <input type="password" className="input" placeholder="Contraseña" />
          </div>
          <div className={styles.main__form__inputField}>
            <i className="fas fa-lock" aria-hidden="true" />
            <input type="password" className="input" placeholder="Corfirmar Contraseña" />
          </div>
          <input type="submit" value="Crear una cuenta" className={`${styles.btn} ${styles.btn_input}`} />
          <p>
            Al registrarse estas aceptando los
            <a href="#" target="blank">Términos y Condiciones</a>
            {' '}
            y la
            <a
              href="#"
            >
              Politica de privacidad y proteccion de datos
            </a>
            {' '}
            de COMFECO
          </p>
        </form>
        {/*------------------------------------------*/
          /* --Form Iniciar Sesión--*/
          /*------------------------------------------*/}
        <form className={`${styles.main__form} ${styles.login__mode}`} action="#">
          <div className={styles.main__form__titleSelection}>
            <h1 className={styles.h1}>Iniciar Sesión</h1>
            <h1
              className={styles.h1}
              onClick={function () {
                document.querySelector('.login__mode').style.visibility = 'hidden';
                document.querySelector('.singUp__mode').style.visibility = 'visible';
              }}
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
            <a href="#" target="blank">Términos y Condiciones</a>
            {' '}
            y la
            <a
              href="#"
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
    <footer className={styles.footer}>
      <div className={styles.seccion1}>
        <h1>Fest And Code</h1>
      </div>
      <div className={styles.seccion2}>
        <h1>Team #58 React</h1>
      </div>
      <div className={styles.footer__rrss}>3</div>
    </footer>
  </div>

);

export default App;
