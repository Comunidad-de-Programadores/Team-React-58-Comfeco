/* eslint-disable react/self-closing-comp */
import React from 'react';
import { arrayOf, string } from 'prop-types';
import { Check } from '@material-ui/icons';
import styles from './styles.css';

const GroupsGrid = ({ groups }) => (
  <>
    <div className={styles.groupsGrid}>
      {groups.map((group) => (
        <div key={group.name} className={styles.groupsGrid__item}>
          <div className={styles.group__shareIcon}>
            <i className="fas fa-share-alt fa-2x"></i>
          </div>
          <img className={styles.group__img} src={group.image} alt={group.name} />
          <div className={styles.group__language}>{group.tag}</div>
          <h3 className={styles.group__name}>{group.name}</h3>
          <p className={styles.group__description}>{group.description}</p>
          {!group.joined && (
            <button className={styles.group__button} type="button">
              Unirse
            </button>
          )}
          {group.joined && (
            <button className={styles.yourGroup__button} type="button">
              <Check />
              Tu grupo
            </button>
          )}
        </div>
      ))}
    </div>
  </>
);

GroupsGrid.propTypes = {
  groups: arrayOf([string]).isRequired,
};

export default GroupsGrid;
