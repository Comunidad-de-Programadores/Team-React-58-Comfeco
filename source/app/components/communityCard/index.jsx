import React, { useContext } from 'react';
import useCommunities from 'app/hooks/useCommunities';
import sessionContext from 'app/context/session';
import logo from '../../images/Isotipo-brand.png';
import styles from './styles.css';

const CommunityCard = () => {
  const { handleJoinCommunity, handleLeaveCommunity, state } = useCommunities();
  const {
    session: { communities },
  } = useContext(sessionContext);

  const { data, isLoading } = state;

  return (
    <div className={styles.community}>
      {isLoading && <div>Cargando...</div>}

      {!isLoading && (
        <>
          <header className={styles.community__header}>
            <h3 className={styles.community__tittle}>Comunidades</h3>
            <a className={styles.community__link} href="/">
              Ver más
            </a>
          </header>

          <ul className={styles.community__grid}>
            {data.map((item) => (
              <li className={styles.community__item} key={item.id}>
                <div className={styles.communityItem__logo}>
                  <img src={logo} alt="communityLogo" />
                </div>
                <h4 className={styles.communityItem__title}>{item.name}</h4>

                <button
                  className={styles.community__link}
                  onClick={() => {
                    handleJoinCommunity(item.id);
                  }}
                  type="button"
                >
                  Unirme
                </button>

                <button
                  className={styles.community__link}
                  onClick={() => {
                    handleLeaveCommunity(item.id);
                  }}
                  type="button"
                >
                  Salir
                </button>

                <hr />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CommunityCard;
