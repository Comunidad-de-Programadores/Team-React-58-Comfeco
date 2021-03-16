import React from 'react';
import useBadges from 'app/hooks/useBadges';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import styles from './styles.css';

const BadgesCardScreen = () => {
  const { isLoading, badges } = useBadges();
  return (
    <>
      <h1 className={styles.title}>Insignias</h1>
      <div className={styles.badges__main__wrapper}>
        <div className={styles.badges__card__wrapper}>
          {isLoading && (
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton variant="react" height={200} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton variant="react" height={200} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton variant="react" height={200} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton variant="react" height={200} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
            </Grid>
          )}
          {!isLoading &&
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
            ))}
        </div>
      </div>
    </>
  );
};

export default BadgesCardScreen;
