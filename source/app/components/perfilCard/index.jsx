/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import useSession from 'app/hooks/useSession';
import { func } from 'prop-types';
import React from 'react';
import styles from './styles.css';

const PerfilCard = ({ onEditProfile }) => {
  const {
    session: { username, biography, facebook, twitter, github, linkedin },
  } = useSession();

  console.log(useSession());

  return (
    <div className={styles.wapper__container}>
      <div className={styles.header__card__background} />
      <div>
        <h6 onClick={onEditProfile}>Editar Perfil</h6>
      </div>
      <div className={styles.wrapper__circle__nickpic}>
        <div className={styles.circle__nickpic}></div>
      </div>
      <div className={styles.description__wrapper}>
        <h4>{username}</h4>
        
      </div>
      <div className={styles.biography__wrapper}>
        <p>
          {biography || (
            <p className={styles.message__profileCard__biograpfy}>"Coloca aqui tu biografia"</p>
          )}
        </p>
      </div>
      <div className={styles.wrapper__insignias}>
        <div className={styles.circle__insinia} >
          <a href={`${'https://www.facebook.com/'}${!facebook ? '' : facebook}`} target="blank">
            <i className={`${'fab fa-facebook-f'} `}></i>
          </a>
        </div>
        
        <div className={styles.circle__insinia} >
          <a href={`${'https://www.twitter.com/'}${!twitter ? '' : twitter}`} target="blank">
            <i className={`${'fab fa-twitter'} `}></i>
          </a>
        </div>
        
        <div className={styles.circle__insinia} >
          <a href={`${'https://www.github.com/'}${!github ? '' : github}`} target="blank">
            <i className={`${'fab fa-github'} `}></i>
          </a>
        </div>
        
        <div className={styles.circle__insinia}>
          <a href={`${'https://www.linkedin.com/'}${!linkedin ? '' : linkedin}`} target="blank">
            <i className={`${'fab fa-linkedin'} `}></i>
          </a>
        </div>
        
        
      </div>

    </div>
  );
};

PerfilCard.propTypes = {
  onEditProfile: func.isRequired,
};

export default PerfilCard;
