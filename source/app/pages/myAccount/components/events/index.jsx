/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { func } from 'prop-types';
import useEvents from '../../../../hooks/useEvents';
import Eventcard from '../eventCard';
import styles from './styles.css';
import withNotifications from '../../../../highOrderComponents/withNotification';

const Events = ({ setNotification }) => {
  const { events, isLoading, handleAddEvent, handleEventLeave } = useEvents(setNotification);
  const skeleton = [...new Array(6)];

  return (
    <div className={styles.wrapper}>
      {!isLoading &&
        events.map((event) => (
          <div className={styles.cardWrapper} key={event.id}>
            <Eventcard {...event} onEventAdd={handleAddEvent} onEventLeave={handleEventLeave} />
          </div>
        ))}

      {/* render skeleton */}
      {isLoading &&
        skeleton.map((_val, index) => (
          <div className={styles.cardWrapper} key={index}>
            <Skeleton height={120} variant="rect" />
            <Skeleton height={25} variant="text" />
            <Skeleton height={25} variant="text" />
            <Skeleton height={25} variant="text" width="70%" />
          </div>
        ))}
    </div>
  );
};

Events.propTypes = {
  setNotification: func.isRequired,
};

export default withNotifications(Events);
