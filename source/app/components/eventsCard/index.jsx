import { ButtonBase, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import limitText from 'app/helpers/limitText';
import { func } from 'prop-types';
import useEvents from '../../hooks/useEvents';
import styles from './styles.css';
import withNotifications from '../../highOrderComponents/withNotification';

const EventsCard = ({ setNotification, onSearchEventClick }) => {
  const { events, isLoading, handleEventLeave } = useEvents(setNotification);
  const myEvents = events.filter((event) => event.joined);

  if (isLoading)
    return (
      <div className={styles.eventsCard}>
        <Skeleton variant="rect" height={80} />
        <Skeleton variant="text" height={25} />
        <Skeleton variant="text" height={25} />
      </div>
    );

  if (myEvents.length)
    return (
      <div className={styles.eventsCard}>
        <div className={styles.title}>Mis Eventos</div>
        {myEvents.map((myEvent) => (
          <div className={styles.eventWrapper}>
            <Grid container alignItems="center" justify="space-between">
              <div className={styles.eventTitle}>{myEvent.name}</div>
              <div className={styles.eventDate}>{new Date(myEvent.date).toLocaleDateString()}</div>
            </Grid>
            <div className={styles.description}>{limitText(myEvent.description, 100)}</div>
            <ButtonBase className={styles.button} onClick={() => handleEventLeave(myEvent.id)}>
              Abandonar
            </ButtonBase>
          </div>
        ))}
      </div>
    );

  return (
    <div className={styles.eventWrapper}>
      <div className={styles.emptyWrapper}>
        <div>Aún no tienes eventos</div>
        <ButtonBase className={styles.buttonAddEvent} onClick={onSearchEventClick}>
          Buscar eventos
        </ButtonBase>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  setNotification: func.isRequired,
  onSearchEventClick: func.isRequired,
};

export default withNotifications(EventsCard);
