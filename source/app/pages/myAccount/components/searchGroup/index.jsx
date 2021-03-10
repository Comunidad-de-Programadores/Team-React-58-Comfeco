/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './styles.css';

const SearchGroup = ({ selectFilters, handleFilterChange, handleSearchChange }) => (
  <div className={styles.searchGroup}>
    <select
      onChange={handleFilterChange}
      className={styles.searchGroup__filter}
      defaultValue="1"
      name=""
      id=""
    >
      <option key="1" value="">
        Filtrar por lenguaje
      </option>
      {selectFilters.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>

    <div className={styles.searchGroup__input}>
      <input onChange={handleSearchChange} type="text" name="search" placeholder="Buscar grupo" />
      <i className="fas fa-search"></i>
    </div>
  </div>
);
SearchGroup.propTypes = {
  selectFilters: PropTypes.arrayOf(string).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchGroup;
