/* eslint-disable no-underscore-dangle */
import useBadges from 'app/hooks/useBadges';
import React from 'react';
// import logo from '../../images/Isotipo-brand.png';
import styles from './styles.css';

const BadgesCard = () => {
  const { userBadges } = useBadges();

  return (
    <div className={styles.badgesCard}>
      <h3 className={styles.badgesCard__title}>Insignias</h3>
      <div className={styles.badgesCard__wrapper}>
        {userBadges.map((badge) => (
          <span className={styles.badgesCard__item} key={badge.name}>
            <img
              key={badge._id}
              className={styles.badgesCard__logo}
              src={badge.image}
              alt={`${badge.name} badge`}
              title={badge.description}
            />
            <span>{badge.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BadgesCard;
