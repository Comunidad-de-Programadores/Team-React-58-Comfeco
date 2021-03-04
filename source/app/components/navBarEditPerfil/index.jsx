import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.css'

const NavBarEditPerfil = () => {
    return (
        <div className={styles.wrapper__container}>
            <div className={styles.container}>
                <button>Mi perfil</button>
                <button>Insignias</button>
                <button>Grupos</button>
                <button>Eventos</button>
            </div>
        </div>
    )
}

export default NavBarEditPerfil;
