/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import { Box, Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import useCommunities from '../hooks/useCommunities';
import styles from './styles.css';

const Communities = () => {
  const { communities, isLoading, handleJoinCommunity, handleLeaveCommunity } = useCommunities();
  const skeletonNumber = [...new Array(4)]
  return (
    <Container maxWidth="md">
      <Box textAlign="center" padding="1em 0em"><h1>Comunidades</h1></Box>
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
          {communities.map((val, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className={styles.card}>
                {val.name}
              </div>
            </Grid>
        ))}
        </Grid>
      )}
      </div>
    </Container>
  )
}

export default Communities;
