import React from 'react';
import useCommunities from 'app/hooks/useCommunities';
import { func } from 'prop-types';
import logo from '../../images/Isotipo-brand.png';
import styles from './styles.css';
import withNotifications from '../../highOrderComponents/withNotification';

const CommunityCard = ({ setNotification }) => {
  const { communities, isLoading, handleJoinCommunity, handleLeaveCommunity } = useCommunities(
    setNotification
  );

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
            {communities.map((community) => (
              <li className={styles.community__item} key={community.id}>
                <div className={styles.communityItem__logo}>
                  <img src={logo} alt="communityLogo" />
                </div>
                <h4 className={styles.communityItem__title}>{community.name}</h4>

                {!community.joined && (
                  <button
                    className={styles.community__link}
                    onClick={() => {
                      handleJoinCommunity(community.id);
                    }}
                    type="button"
                  >
                    Unirme
                  </button>
                )}

                {community.joined && (
                  <button
                    className={styles.community__link}
                    onClick={() => {
                      handleLeaveCommunity(community.id);
                    }}
                    type="button"
                  >
                    Salir
                  </button>
                )}
                <hr />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

CommunityCard.propTypes = {
  setNotification: func.isRequired,
};

export default withNotifications(CommunityCard);
