/* eslint-disable react/no-array-index-key */
import { Container, Grid } from '@material-ui/core';
import { Group } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { func } from 'prop-types';
import React from 'react';
import withNotifications from '../highOrderComponents/withNotification';
import useCommunities from '../hooks/useCommunities';
import styles from './styles.css';

const Communities = ({ setNotification }) => {
  const { communities, isLoading, handleJoinCommunity, handleLeaveCommunity } = useCommunities(
    setNotification
  );
  const skeletonNumber = [...new Array(4)];

  return (
    <Container maxWidth="md">
      <h1 className={styles.title}>Comunidades</h1>
      <div className={styles.wrapper}>
        {isLoading && (
          <Grid container spacing={2}>
            {skeletonNumber.map((_val, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Skeleton variant="rect" height={200} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
            ))}
          </Grid>
        )}
        {!isLoading && (
          <Grid container spacing={2}>
            {communities.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className={styles.card}>
                  <Group className={styles.icon} />
                  {value.name}
                  {value.joined && (
                    <button
                      type="button"
                      className={styles.butonleave}
                      onClick={() => handleLeaveCommunity(value.id)}
                    >
                      Salir
                    </button>
                  )}
                  {!value.joined && (
                    <button
                      type="button"
                      className={styles.button}
                      onClick={() => handleJoinCommunity(value.id)}
                    >
                      Unirme
                    </button>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

Communities.propTypes = {
  setNotification: func.isRequired,
};

export default withNotifications(Communities);
