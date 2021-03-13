/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'app/components/errorMessage';
import styles from './styles.css';

const GroupsGrid = ({ errorMessage, groups }) => (
  <>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

    <div className={styles.groupsGrid}>
      {groups.search.length > 0 &&
        groups.search.map((group) => (
          <div key={group.name} className={styles.groupsGrid__item}>
            <div className={styles.group__shareIcon}>
              <i className="fas fa-share-alt fa-2x"></i>
            </div>

            <img className={styles.group__img} src={group.image} alt={group.name} />

            <div className={styles.group__language}>{group.tag}</div>

            <h3 className={styles.group__name}>{group.name}</h3>

            <p className={styles.group__description}>{group.description}</p>

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

            <img className={styles.group__img} src={group.image} alt={group.name} />

            <div className={styles.group__language}>{group.tag}</div>

            <h3 className={styles.group__name}>{group.name}</h3>

            <p className={styles.group__description}>{group.description}</p>

            <button className={styles.group__button} type="button">
              Unirse
            </button>
          </div>
        ))}
    </div>
  </>
);

GroupsGrid.defaultProps = {
  errorMessage: null,
};

GroupsGrid.propTypes = {
  errorMessage: PropTypes.string,
  groups: PropTypes.shape({
    default: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired,
  }).isRequired,
};

export default GroupsGrid;
