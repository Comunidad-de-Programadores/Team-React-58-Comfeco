import React from 'react';
import useGroups from 'app/hooks/useGroups';
import GroupsGrid from '../groupsGrid';
import SearchGroup from '../searchGroup';
import MyGroupCard from '../myGroupCard';
import styles from './styles.css';

const Groups = () => {
  const {
    groups,
    errorMessage,
    isLoading,
    handleFilterChange,
    handleSearchChange,
    selectFilters,
  } = useGroups();

  return (
    <div className={styles.groups}>
      <h1 className={styles.title}>Grupos</h1>
      <div className={styles.myGroupCard__wrapper}>
        <MyGroupCard />
      </div>

      <div className={styles.searchGroup__wrapper}>
        <SearchGroup
          selectFilters={selectFilters}
          handleFilterChange={handleFilterChange}
          handleSearchChange={handleSearchChange}
        />
      </div>

      <div className={styles.groupsGrid__wrapper}>
        {isLoading && <div>Cargando</div>}
        {!isLoading && <GroupsGrid errorMessage={errorMessage} groups={groups} />}
      </div>
    </div>
  );
};

export default Groups;
