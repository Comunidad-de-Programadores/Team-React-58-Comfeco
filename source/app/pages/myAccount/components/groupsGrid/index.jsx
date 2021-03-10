/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const GroupsGrid = ({ groups }) => (
  <div className={styles.groupsGrid}>
    {groups.search.length > 0 &&
      groups.search.map((group) => (
        <div key={group.name} className={styles.groupsGrid__item}>
          <div className={styles.group__shareIcon}>
            <i className="fas fa-share-alt fa-2x"></i>
          </div>

          <img className={styles.group__img} src={group.image} alt="" />

          <div className={styles.group__language}>{group.tag || group.tags}</div>

          <h3 className={styles.group__name}>{group.name}</h3>

          <p>{group.description}</p>

          <button className={styles.group__button} type="button">
            Unirse
          </button>
        </div>
      ))}

    {groups.search.length === 0 &&
      groups.default.map((group) => (
        <div key={group.name} className={styles.groupsGrid__item}>
          <div className={styles.group__shareIcon}>
            <i className="fas fa-share-alt fa-2x"></i>
          </div>

          <img className={styles.group__img} src={group.image} alt="" />

          <div className={styles.group__language}>{group.tag || group.tags}</div>

          <h3 className={styles.group__name}>{group.name}</h3>

          <p>{group.description}</p>

          <button className={styles.group__button} type="button">
            Unirse
          </button>
        </div>
      ))}
  </div>
);

GroupsGrid.propTypes = {
  groups: PropTypes.shape({
    default: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired,
  }).isRequired,
};

export default GroupsGrid;
