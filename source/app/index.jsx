import React from 'react';
import './style.css';
import './logo.svg';

const App = () => (
    <div className='wrapper'>
      {/*------------------------------------------*/
      /*--Header--*/
      /*------------------------------------------*/}
      <div className='header'>
        <img src='./logo.svg' alt="logo"/>

      </div>

      {/*------------------------------------------*/
      /*--main--*/
      /*------------------------------------------*/}
      <div className='main'>
        {/*------------------------------------------*/
        /*--Form Registrarse--*/
        /*------------------------------------------*/}
        <div className='main__wrapper__form'>
          <form className="main__form singUp__mode" action="#" >
                    <div className="main__form__titleSelection">
                        <h1 onClick={function () {
                          document.querySelector(".login__mode").style.visibility="visible"
                          document.querySelector(".singUp__mode").style.visibility="hidden"
                          }}>Iniciar Sesión</h1>
                        <h1 >Regitrarse</h1>
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-user" aria-hidden="true" />
                        <input type="text" className="input" placeholder="Nick name" />
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-envelope" aria-hidden="true" />
                        <input type="email" className="input" placeholder="Correo Electronico" />
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-lock" aria-hidden="true" />
                        <input type="password" className="input" placeholder="Contraseña" />
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-lock" aria-hidden="true" />
                        <input type="password" className="input" placeholder="Corfirmar Contraseña" />
                    </div>
                    <input type="submit" value="Crear una cuenta" className="btn btn-input" />
                    <p>Al registrarse estas aceptando los <a href="#" target="blank">Términos y Condiciones</a> y la <a
                            href="#">Politica de privacidad y proteccion de datos</a> de COMFECO</p>
          </form>
          {/*------------------------------------------*/
          /*--Form Iniciar Sesión--*/
          /*------------------------------------------*/}
          <form className="main__form login__mode" action="#" >
                    <div className="main__form__titleSelection">
                        <h1>Iniciar Sesión</h1>
                        <h1 onClick={function () {
                          document.querySelector(".login__mode").style.visibility="hidden"
                          document.querySelector(".singUp__mode").style.visibility="visible"
                          }}>Regitrarse</h1>
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-user" aria-hidden="true" />
                        <input type="text" className="input" placeholder="Nick name o Correo Electronico" />
                    </div>
                    <div className="main__form__inputField">
                        <i className="fas fa-lock" aria-hidden="true" />
                        <input type="password" className="input" placeholder="Contraseña" />
                    </div>
                    <input type="submit" value="Iniciar sesion" className="btn btn-input" />
                    <p>Al registrarse estas aceptando los <a href="#" target="blank">Términos y Condiciones</a> y la <a
                            href="#">Politica de privacidad y proteccion de datos</a> de COMFECO</p>
          </form>
        </div>
      </div>
      {/*------------------------------------------*/
      /*--Footer--*/
      /*------------------------------------------*/}
      <footer className="footer">
        <div className="seccion1">
          <h1>Fest And Code</h1>
        </div>
        <div className="seccion2">
          <h1>Team #58 React</h1>
        </div>
        <div className="footer__rrss">3</div>
      </footer>
    </div>
    
);


export default App;
