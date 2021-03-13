/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import useGroups from 'app/hooks/useGroups';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Search } from '@material-ui/icons';
import GroupsGrid from '../groupsGrid';
import SearchGroup from '../searchGroup';
import MyGroupCard from '../myGroupCard';
import styles from './styles.css';

const Groups = () => {
  const {
    filter,
    search,
    handleFilterChange,
    handleSearchChange,
    avalilableFilterList,
    isLoading,
    groups,
  } = useGroups();

  const skeleton = [...new Array(4)];

  return (
    <div className={styles.groups}>
      <h1 className={styles.title}>Grupos</h1>
      <div className={styles.myGroupCard__wrapper}>
        <MyGroupCard />
      </div>

      <div className={styles.searchGroup__wrapper}>
        <SearchGroup
          filter={filter}
          search={search}
          avalilableFilterList={avalilableFilterList}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />
      </div>

      <div className={styles.groupsGrid__wrapper}>
        {isLoading && (
          <Grid container spacing={3}>
            {skeleton.map((_val, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Skeleton variant="rect" height={250} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
              </Grid>
            ))}
          </Grid>
        )}
        {!isLoading && <GroupsGrid groups={groups} />}
        {!isLoading && !groups.length && (
          <div className={styles.emptyResult}>
            <Search />
            <div>
              No econtramos <br /> resultados de busqueda
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Groups;
