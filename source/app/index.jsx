import React from 'react';
import Header from 'app/components/header';
import Footer from 'app/components/footer';
import { Route, Switch } from 'react-router';
import Test from 'app/pages/test';
import TestResgister from 'app/pages/testresgister';
import styles from './style.css';

const App = () => (
  <Switch>
    <Route path="/test" component={Test} />
    <Route path="/testregister" component={TestResgister} />
    <Route component={() => (
      <div className={styles.wrapper}>
        {/*------------------------------------------*/
        /* --Header--*/
        /*------------------------------------------*/}
        <Header />
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
        <Footer />
        {/*------------------------------------------*/
        /* --Footer--*/
        /*------------------------------------------*/}
      </div>
    )}
    />
  </Switch>

);

export default App;
