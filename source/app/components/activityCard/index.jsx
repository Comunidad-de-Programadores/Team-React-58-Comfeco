/* eslint-disable no-underscore-dangle */
import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import useActivities from 'app/hooks/useActivities';
import React from 'react';
import img from '../../images/activity.svg';
import styles from './styles.css';

const ActivityCard = () => {
  const { activities, isLoading } = useActivities();

  return (
    <div className={styles.activityCard}>
      <h3 className={styles.activityCard__title}>Actividad reciente</h3>

      {isLoading && (
        <>
          <Box container marginBottom="1em">
            <Skeleton height="1.8em" />
            <Skeleton height="1.8em" />
          </Box>
          <Box container marginBottom="1em">
            <Skeleton height="1.8em" />
            <Skeleton height="1.8em" />
          </Box>
        </>
      )}

      {!isLoading && (
        <ul className={styles.activityCard__wrapper}>
          {activities.map((activity) => (
            <li key={activity._id} className={styles.activityCard__item}>
              <p className={styles.activity__message}>{activity.message}</p>
              <span className={styles.activity__date}>{activity.date}</span>
              <img className={styles.activity__img} src={img} alt="activity" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityCard;
