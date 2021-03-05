/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import countries from 'app/helpers/countries';
import useProfile from 'app/hooks/useProfile';
import React from 'react';
import Input from '../input';
import NavBarEditPerfil from '../navBarEditPerfil/index';
import PerfilCard from '../perfilCard';
import styles from './styles.css';

const FormEditPerfil = () => {
  const { handleSubmit, isLoading, errorMessage, values, inputProps } = useProfile();

  return (
    <>
      <div>
        <NavBarEditPerfil />
        <div className={styles.wrapper__container}>
          {/*------------------------------------------*/
          /* -- Seccion Nombre y foto de perfil-- */
          /*------------------------------------------*/}
          <div className={styles.container}>
            <PerfilCard />
            <h1>Editar Perfil</h1>
            <div className={styles.wrapper__circle__nickpic}>
              <div className={styles.circle__nickpic}>
                item
                <div className={styles.overlay__nickpic}>
                  <i className={`${'fas fa-camera'} `}></i>
                </div>
              </div>
            </div>
            {/*------------------------------------------*/
            /* --Comienzo Form--*/
            /*------------------------------------------*/}
            {isLoading && <div>Cargando...</div>}

            {!isLoading && (
              <form onSubmit={handleSubmit}>
                {/*------------------------------------------*/
                /* --Primer Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                    <h4>Nick</h4>
                    <Input
                      name="username"
                      placeholder="Nick del usuario"
                      type="text"
                      values={values}
                      {...inputProps}
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                    <h4>Correo</h4>
                    <Input
                      name="email"
                      placeholder="example.email.com"
                      type="email"
                      values={values}
                      {...inputProps}
                    />
                  </div>
                </div>
                {/*------------------------------------------*/
                /* --Segundo Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                    <h4>Genero</h4>
                    <select
                      name="gender"
                      {...inputProps}
                      value={values.gender ? `${values.gender}` : '1'}
                    >
                      <option key="1" value="">
                        Selecciona un Genero
                      </option>

                      <option key="hombre" value="hombre">
                        Hombre
                      </option>
                      <option key="mujer" value="mujer">
                        Mujer
                      </option>
                    </select>
                  </div>
                  <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                    <h4>Fecha de Nacimiento</h4>
                    <Input name="birthdate" type="date" values={values} {...inputProps} />
                  </div>
                  <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                    <h4>Pais</h4>
                    <select
                      name="country"
                      {...inputProps}
                      value={values.country ? `${values.country}` : ''}
                    >
                      <option key="1" value="">
                        Selecciona un Pais
                      </option>

                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/*------------------------------------------*/
                /* --Tercer Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                    <h4>Contraseña</h4>
                    <Input
                      name="password"
                      placeholder="*********"
                      type="password"
                      values={values}
                      {...inputProps}
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                    <h4>Repetir Contraseña</h4>
                    <Input
                      name="confirmPassword"
                      placeholder="*********"
                      type="password"
                      values={values}
                      {...inputProps}
                    />
                  </div>
                </div>
                {/*------------------------------------------*/
                /* --Cuarto Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                    <div className={styles.wrapper__social__media__icon}>
                      <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                      <h4>facebook.com/</h4>
                    </div>
                    <Input name="facebook" type="text" values={values} {...inputProps} />
                  </div>
                  <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                    <div className={styles.wrapper__social__media__icon}>
                      <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                      <h4>twitter.com/</h4>
                    </div>
                    <Input name="twitter" type="text" values={values} {...inputProps} />
                  </div>
                </div>
                {/*------------------------------------------*/
                /* --Quinto Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                    <div className={styles.wrapper__social__media__icon}>
                      <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                      <h4>github.com/</h4>
                    </div>
                    <Input name="github" type="text" values={values} {...inputProps} />
                  </div>
                  <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                    <div className={styles.wrapper__social__media__icon}>
                      <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                      <h4>linkedin.com/</h4>
                    </div>
                    <Input name="linkedin" type="text" values={values} {...inputProps} />
                  </div>
                </div>
                {/*------------------------------------------*/
                /* --Sexto Row--*/
                /*------------------------------------------*/}
                <div className={styles.wrapper__form__row}>
                  <div className={`${styles.biography} ${styles.completeItem}`}>
                    <h4>Biografia</h4>
                    <textarea
                      name="biography"
                      placeholder="Escribe aqui su Biografia"
                      maxLength="140"
                      {...inputProps}
                    ></textarea>
                  </div>
                </div>
                <button type="submit">Guardar</button>
                {errorMessage && <div>{errorMessage}</div>}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEditPerfil;
