import React from 'react';
import SignUp from '../../components/signUp/index';
import styles from './style.css';
import poligono from '../../images/poligonoAsset.svg';
import loginImg from '../../images/login2.svg';
import signInImg from '../../images/signIn.svg';
import SignIn from '../../components/signIn/index';

const Auth = () => (
  <div className={styles.wrapper}>

    {/* container form */}
    <div className={styles.cotainer__Form}>

      {/*------------------------------------------*/
      /*  -- Form model sing Up --  */
      /*------------------------------------------*/}
      <div className={styles.wrapper__form__signUp}>

        <img className={styles.form__poligono} src={poligono} alt="poligono" />

        {/* Section Poligono */}
        <div className={styles.polygonSection}>
          <img className={styles.loginImg} src={loginImg} alt="login" />
        </div>
        {/* section form */}
        <div className={styles.form__Section}>
          <SignUp />
        </div>

      </div>

      {/*------------------------------------------*/
      /*  -- Form model sing In --  */
      /*------------------------------------------*/}
      <div className={styles.wrapper__form__signIn}>

        <img className={styles.form__poligono} src={poligono} alt="poligono" />

        {/* section form */}
        <div className={styles.form__Section}>
          <SignIn />
        </div>

        {/* Section Poligono */}
        <div className={styles.polygonSection}>
          <img className={styles.signInImg} src={signInImg} alt="login" />
        </div>

      </div>

    </div>

    {/* final container form */}

  </div>
);

export default Auth;
