/* eslint-disable import/no-named-as-default-member */
import { CircularProgress, Grid } from '@material-ui/core';
import countries from 'app/helpers/countries';
import knowledges from 'app/helpers/knowledges';
import dateFunction from 'app/helpers/date';
import useProfile from 'app/hooks/useProfile';
import { func } from 'prop-types';
import React from 'react';
import ErrorMessage from '../errorMessage';
import Input from '../input';
import styles from './styles.css';

const FormEditPerfil = ({ onCancel, onSuccess }) => {
  const { handleSubmit, isLoading, errorMessage, values, inputProps } = useProfile(onSuccess);
  const birthdateFormated = dateFunction.toString(values.birthdate);

  if (isLoading)
    return (
      <div className={styles.loadingWrapper}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div>
        <div className={styles.wrapper__container}>
          {/*------------------------------------------*/
          /* -- Seccion Nombre y foto de perfil-- */
          /*------------------------------------------*/}
          <div className={styles.container}>
            <h1>Editar Perfil</h1>
            <div className={styles.overlay__headerCard} />
            <div className={styles.wrapper__circle__nickpic}>
              <div className={styles.circle__nickpic}>
                item
                <div className={styles.overlay__nickpic}>
                  <i className="fas fa-camera" />
                </div>
              </div>
            </div>
            {/*------------------------------------------*/
            /* --Comienzo Form--*/
            /*------------------------------------------*/}

            <form onSubmit={handleSubmit}>
              {/*------------------------------------------*/
              /* --Primer Row--*/
              /*------------------------------------------*/}
              <div className={styles.wrapper__form__row}>
                <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                  <h4>Nick</h4>
                  <Input
                    className={styles.form__editPerdil_input}
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
                    className={styles.form__editPerdil_input}
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
                    className={styles.FormEditPerfil__select}
                    name="gender"
                    {...inputProps}
                    value={values.gender || '1'}
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
                  <Input
                    className={styles.form__editPerdil_input}
                    name="birthdate"
                    type="date"
                    values={values}
                    {...inputProps}
                    value={birthdateFormated}
                  />
                </div>
                <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                  <h4>Pais</h4>
                  <select
                    className={styles.FormEditPerfil__select}
                    name="country"
                    {...inputProps}
                    value={values.country || ''}
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
                <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                  <h4>Area de Conocimiento</h4>
                  <select
                    className={styles.FormEditPerfil__select}
                    name="knowledgeArea"
                    {...inputProps}
                    value={values.knowledgeArea || ''}
                  >
                    <option key="1" value="">
                      Selecciona una Opcion
                    </option>

                    {knowledges.map((knowledgesArea) => (
                      <option key={knowledgesArea} value={knowledgesArea}>
                        {knowledgesArea}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                  <h4>Contraseña</h4>
                  <Input
                    className={styles.form__editPerdil_input}
                    name="password"
                    placeholder="*********"
                    type="password"
                    values={values}
                    {...inputProps}
                  />
                </div>
                <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                  <h4>Repetir Contraseña</h4>
                  <Input
                    className={styles.form__editPerdil_input}
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
                    <i className={`${'fab fa-facebook-square fa-3x'} `} />
                    <h4>facebook.com/</h4>
                  </div>
                  <Input
                    className={styles.form__editPerdil_input}
                    name="facebook"
                    type="text"
                    values={values}
                    {...inputProps}
                  />
                </div>
                <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                  <div className={styles.wrapper__social__media__icon}>
                    <i className={`${'fab fa-facebook-square fa-3x'} `} />
                    <h4>twitter.com/</h4>
                  </div>
                  <Input
                    className={styles.form__editPerdil_input}
                    name="twitter"
                    type="text"
                    values={values}
                    {...inputProps}
                  />
                </div>
              </div>
              {/*------------------------------------------*/
              /* --Quinto Row--*/
              /*------------------------------------------*/}
              <div className={styles.wrapper__form__row}>
                <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                  <div className={styles.wrapper__social__media__icon}>
                    <i className={`${'fab fa-facebook-square fa-3x'} `} />
                    <h4>github.com/</h4>
                  </div>
                  <Input
                    className={styles.form__editPerdil_input}
                    name="github"
                    type="text"
                    values={values}
                    {...inputProps}
                  />
                </div>
                <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                  <div className={styles.wrapper__social__media__icon}>
                    <i className={`${'fab fa-facebook-square fa-3x'} `} />
                    <h4>linkedin.com/</h4>
                  </div>
                  <Input
                    className={styles.form__editPerdil_input}
                    name="linkedin"
                    type="text"
                    values={values}
                    {...inputProps}
                  />
                </div>
              </div>
              {/*------------------------------------------*/
              /* --Sexto Row--*/
              /*------------------------------------------*/}
              <div className={styles.wrapper__form__row}>
                <div className={`${styles.biography} ${styles.completeItem}`}>
                  <h4>Biografia</h4>
                  <textarea
                    value={values.biography || ''}
                    name="biography"
                    placeholder="Escribe aqui su Biografia"
                    maxLength="140"
                    {...inputProps}
                  />
                </div>
              </div>

              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  <button className={styles.form__editPerfil_button} type="submit">
                    Guardar
                  </button>
                </Grid>
                <Grid item xs={6} md={3}>
                  <button
                    className={styles.form__editPerfil_button}
                    type="button"
                    onClick={onCancel}
                  >
                    Cancelar
                  </button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

FormEditPerfil.propTypes = {
  onCancel: func.isRequired,
  onSuccess: func.isRequired,
};

export default FormEditPerfil;
