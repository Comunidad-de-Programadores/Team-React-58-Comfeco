import React from 'react';
import useBadges from 'app/hooks/useBadges';
import styles from './styles.css';

const BadgesCardScreen = () => {
  const { isLoading, badges } = useBadges();

  return (
    <div className={styles.badges__main__wrapper}>
      <div className={styles.badges__card__wrapper}>
        {isLoading ? (
          <h1 className={styles.card__loading}>Cargando</h1>
        ) : (
          badges.map((badge) => (
            <div key={badge.id} className={styles.badges__Card}>
              <div className={styles.badges__circle__wrapper}>
                <div className={styles.middle__wrapper__circle} />
                <div className={styles.badge__circle}>
                  <img src={badge.image} alt="" />
                </div>
              </div>

              <div className={styles.badges__body__Card}>
                <span>{badge.name}</span>
                <p>{badge.description}</p>

                <hr />

                <span>¿Como Ganarla?</span>
                <p>{badge.howToGetIt}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BadgesCardScreen;
