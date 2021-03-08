import React from 'react';
import GroupsGrid from 'app/components/groupsGrid';
import SearchGroup from 'app/components/searchGroup';
import MyGroupCard from 'app/components/myGroupCard';
import styles from './styles.css';

const Groups = () => (
  <div className={styles.groups}>
    <h1 className={styles.title}>Grupos</h1>
    <div className={styles.myGroupCard__wrapper}>
      <MyGroupCard />
    </div>

    <div className={styles.searchGroup__wrapper}>
      <SearchGroup />
    </div>

    <div className={styles.groupsGrid__wrapper}>
      <GroupsGrid />
    </div>
  </div>
);

export default Groups;
