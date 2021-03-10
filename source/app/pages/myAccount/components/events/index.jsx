/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Skeleton } from '@material-ui/lab';
import useEvents from '../../../../hooks/useEvents';
import Eventcard from '../eventCard';
import styles from './styles.css';

const Evenets = (props) => {
  const { events, isLoading } = useEvents();
  const skeleton = [...new Array(6)];

  return (
    <div className={styles.wrapper}>
      {!isLoading &&
        events.map((event) => (
          <div className={styles.cardWrapper} key={event.id}>
            <Eventcard {...event} />
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

export default Evenets;
