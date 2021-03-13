import { ButtonBase, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import limitText from 'app/helpers/limitText';
import useEvents from '../../hooks/useEvents';
import styles from './styles.css';

const EventsCard = () => {
  const { events, isLoading } = useEvents();
  const myEvents = events.filter((event) => event.joined);

  if (isLoading)
    return (
      <div className={styles.eventsCard}>
        <Skeleton variant="rect" height={80} />
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
      </div>
    );

  return (
    <div className={styles.eventsCard}>
      {myEvents.map((myEvent) => (
        <div key={myEvent.id} className={styles.eventWrapper}>
          <Grid container alignItems="center" justify="space-between">
            <div className={styles.eventTitle}>{myEvent.name}</div>
            <div className={styles.eventDate}>{new Date(myEvent.date).toLocaleDateString()}</div>
          </Grid>
          <div className={styles.description}>{limitText(myEvent.description, 100)}</div>
          <ButtonBase className={styles.button}>Abandonar</ButtonBase>
        </div>
      ))}
    </div>
  );
};

export default EventsCard;
