import React from 'react';
import useGroups from 'app/hooks/useGroups';
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
        {isLoading && <div>Cargando</div>}
        {!isLoading && <GroupsGrid groups={groups} />}
      </div>
    </div>
  );
};

export default Groups;
