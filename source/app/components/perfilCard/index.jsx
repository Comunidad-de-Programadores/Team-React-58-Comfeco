import React from 'react';
import styles from './styles.css';

const PerfilCard = () => {
    return (
        <div className={styles.wapper__container}>
            <a href="">
                <h6>Editar Perfil</h6>
            </a>
            <div className={styles.wrapper__circle__nickpic}>
                <div className={styles.circle__nickpic}>
                    item
                </div>
            </div>
            <div className={styles.description__wrapper}>
                <h4>Nick del usuario</h4>
                <h5>Fronted Developer / UI/UX</h5>
            </div>
            <div className={styles.biography__wrapper}>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora, 
                explicabo ex a aspernatur autem officiis praesentium ut sapiente ipsa cum, 
                quaerat pariatur qui atque vero ratione voluptatum. Expedita, accusamus.
                </p> 
            </div>
            <div className={styles.wrapper__insignias}>
                <div className={styles.circle__insinia}></div>
                <div className={styles.circle__insinia}></div>
                <div className={styles.circle__insinia}></div>
                <div className={styles.circle__insinia}></div>
            </div>
        </div>
    )
}

export default PerfilCard;
