import React, { useState } from 'react';
import SignUp from '../../components/signUp/index';
import styles from './style.css';
import poligono from '../../images/poligonoAsset.svg';
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
      <div className={ `${styles.cotainer__Form} ${addClass ? styles.signUp__mode : ''}` }>

        <p className={styles.paragraph__button} >¿No tienes cuenta?</p>
        <button className={styles.button__submit} type="submit" onClick={handleAddClass} >Crear Una Cuenta</button>

        <p className={styles.paragraph__button__submit__signUp__mode} >¿Ya tienes una cuenta?</p>
        <button className={styles.button__submit__signUp__mode} type="submit" onClick={handleAddClass} >Iniciar Sesión</button>

        <img className={styles.loginImg} src={loginImg} alt="login" />
        <img className={styles.signInImg} src={signInImg} alt="login" />
        <img className={styles.wrapper__poligono} src={poligono} alt="poligono" />

        {/*------------------------------------------*/
      /*  -- Form model sing Up --  */
      /*------------------------------------------*/}
        <div className={styles.wrapper__form__signUp}>

<<<<<<< HEAD
          {/* Section Poligono */}
          <div className={styles.polygonSection}>
            {/* <img className={styles.loginImg} src={loginImg} alt="login" /> */}
          </div>
          {/* section form */}
          <div className={styles.form__Section}>
            <SignUp />
          </div>

=======
        <img className={styles.form__poligono} src={poligono} alt="poligono" />

        {/* Section Poligono */}
        <div className={styles.polygonSection}>
          <img className={styles.loginImg} src={loginImg} alt="login" />
>>>>>>> 7af91afea923f15ea2752e285d02cd5ba8735037
        </div>

        {/*------------------------------------------*/
      /*  -- Form model sing In --  */
      /*------------------------------------------*/}
        <div className={styles.wrapper__form__signIn}>

<<<<<<< HEAD
          {/* section form */}
          <div className={styles.form__Section}>
            <SignIn />
          </div>
=======
        <img className={styles.form__poligono} src={poligono} alt="poligono" />
>>>>>>> 7af91afea923f15ea2752e285d02cd5ba8735037

          {/* Section Poligono */}
          <div className={styles.polygonSection}>
            
          </div>

<<<<<<< HEAD
=======
        {/* Section Poligono */}
        <div className={styles.polygonSection}>
          <img className={styles.signInImg} src={signInImg} alt="login" />
>>>>>>> 7af91afea923f15ea2752e285d02cd5ba8735037
        </div>

      </div>

      {/* final container form */}

    </div>
  );
};
export default Auth;
