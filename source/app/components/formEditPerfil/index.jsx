import React from 'react';
import styles from './styles.css';

const FormEditPerfil = () => {
    return (
        <>
            <div>
            <div className={styles.wrapper__container}>
                {/*------------------------------------------*/
                /*--Seccion Nombre y foto de perfil--*/
                /*------------------------------------------*/}
                <div className={styles.container}>
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
                    /*--Comienzo Form--*/
                    /*------------------------------------------*/}
                    <form>
                        {/*------------------------------------------*/
                        /*--Primer Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                                <h4>Nick</h4>
                                <input type="text" placeholder="Nick del usuario"/>
                            </div>
                            <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                                <h4>Correo</h4>
                                <input type="text" placeholder="example.email.com"/>
                            </div>
                        </div>
                        {/*------------------------------------------*/
                        /*--Segundo Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                                <h4>Genero</h4>
                                <select name="Genero">
                                    <option value="1" selected disabled>Selecciona un Genero</option>
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                </select>
                            </div>
                            <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                                <h4>Fecha de Nacimiento</h4>
                                <input type="date" placeholder="example.email.com"/>
                            </div>
                            <div className={`${styles.form__group} ${styles.form__threeItems}`}>
                                <h4>Pais</h4>
                                <select name="pais">
                                    <option value="1" selected disabled>Selecciona un Pais</option>
                                    <option value="1">Argentina</option>
                                    <option value="2">España</option>
                                    <option value="3">México</option>
                                    <option value="4">Guatemala</option>
                                    <option value="5">Honduras</option>
                                    <option value="7">El Salvador</option>
                                    <option value="8">Venezuela</option>
                                    <option value="9">Colombia</option>
                                    <option value="10">Cuba</option>
                                    <option value="11">Bolivia</option>
                                    <option value="13">Perú</option>
                                    <option value="14">Ecuador</option>
                                    <option value="15">Paraguay</option>
                                    <option value="16">Uruguay</option>
                                    <option value="17">Chile</option>
                                </select>
                            </div>
                        </div>
                        {/*------------------------------------------*/
                        /*--Tercer Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                                <h4>Contraseña</h4>
                                <input type="password" placeholder="*********"/>
                            </div>
                            <div className={`${styles.form__group} ${styles.form__twoItems}`}>
                                <h4>Repetir Contraseña</h4>
                                <input type="password" placeholder="*********"/>
                            </div>
                        </div>
                        {/*------------------------------------------*/
                        /*--Cuarto Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                                <div className={styles.wrapper__social__media__icon}>
                                    <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                                    <h4>facebook.com/</h4>
                                </div>
                                <input type="text" />
                            </div>
                            <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                                <div className={styles.wrapper__social__media__icon}>
                                    <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                                    <h4>twitter.com/</h4>
                                </div>
                                <input type="text" />
                            </div>
                        </div>
                        {/*------------------------------------------*/
                        /*--Quinto Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                                <div className={styles.wrapper__social__media__icon}>
                                    <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                                    <h4>github.com/</h4>
                                </div>
                                <input type="text" />
                            </div>
                            <div className={`${styles.social__media} ${styles.form__twoItems}`}>
                                <div className={styles.wrapper__social__media__icon}>
                                    <i className={`${'fab fa-facebook-square fa-3x'} `}></i>
                                    <h4>linkedin.com/</h4>
                                </div>
                                <input type="text" />
                            </div>
                        </div>
                        {/*------------------------------------------*/
                        /*--Sexto Row--*/
                        /*------------------------------------------*/}
                        <div className={styles.wrapper__form__row}>
                            <div className={`${styles.biography} ${styles.completeItem}`}>
                                <h4>Biografia</h4>
                                <textarea name="biografia" placeholder="Escribe aqui su Biografia"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default FormEditPerfil;
