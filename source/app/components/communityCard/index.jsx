import React from 'react';
import useCommunities from 'app/hooks/useCommunities';
import logo from '../../images/Isotipo-brand.png';
import styles from './styles.css';

const CommunityCard = () => {
  const { data, isLoading } = useCommunities();

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

                <boton className={styles.community__link} href="/">
                  Unirme
                </boton>
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
