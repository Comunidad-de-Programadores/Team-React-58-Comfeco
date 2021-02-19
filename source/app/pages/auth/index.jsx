import React, { useState } from 'react';
import SignUp from '../../components/signUp/index';
import styles from './style.css';
import poligono from '../../images/poligonoForm.svg';
import loginImg from '../../images/login2.svg';
import signInImg from '../../images/signIn.svg';
import SignIn from '../../components/signIn/index';

const Auth = () => {
  const [addClass, setAddClass] = useState(false);

  const handleAddClass = () => {
    setAddClass(!addClass);
  };

  return (

    <div className={styles.wrapper}>

      {/* container form */}
      <div className={`${styles.cotainer__Form} ${addClass ? styles.signUp__mode : ''}`}>

        {/* boton y parrafo del poligono svg en el form */}
        <div className={styles.wrapper__buttonPolygon__loginMode} >

          <p className={styles.paragraph__button} >¿No tienes cuenta?</p>
          <button className={styles.button__submit} type="submit" onClick={handleAddClass} >Crear Una Cuenta</button>

        </div>

        <div className={styles.wrapper__buttonPolygon__signInMode} >

          <p className={styles.paragraph__button__submit__signIn__mode} >¿Ya tienes una cuenta?</p>
          <button className={styles.button__submit__signIn__mode} type="submit" onClick={handleAddClass} >Iniciar Sesión</button>

        </div>


        <img className={styles.loginImg} src={loginImg} alt="login" />
        <img className={styles.signInImg} src={signInImg} alt="login" />
        <img className={styles.wrapper__poligono} src={poligono} alt="poligono" />

        {/*------------------------------------------*/
      /*  -- Form model sing Up --  */
      /*------------------------------------------*/}
        <div className={styles.wrapper__form__signUp}>

          {/* Section Poligono */}
          <div className={styles.polygonSection} />

          {/* section form */}
          <div className={styles.form__Section}>
            <SignUp />
          </div>

        </div>

        {/*------------------------------------------*/
      /*  -- Form model sing In --  */
      /*------------------------------------------*/}
        <div className={styles.wrapper__form__signIn}>

          {/* section form */}
          <div className={styles.form__Section}>
            <SignIn />
          </div>

          {/* Section Poligono */}
          <div className={styles.polygonSection} />
        </div>

      </div>

      {/* final container form */}

    </div>
  );
};
export default Auth;
