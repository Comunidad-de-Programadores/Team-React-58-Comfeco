/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes, { arrayOf, string } from 'prop-types';
import styles from './styles.css';

const SearchGroup = ({ avalilableFilterList, onFilterChange, onSearchChange, search, filter }) => (
  <div className={styles.searchGroup}>
    <select onChange={onFilterChange} className={styles.searchGroup__filter} value={filter}>
      <option disabled>Filtrar por lenguaje</option>
      <option value="all">Todos</option>
      {avalilableFilterList.map((currentFilter) => (
        <option key={currentFilter} value={currentFilter}>
          {currentFilter}
        </option>
      ))}
    </select>

    <div className={styles.searchGroup__input}>
      <input
        onChange={onSearchChange}
        type="text"
        name="search"
        placeholder="Buscar grupo"
        value={search}
      />
      <i className="fas fa-search"></i>
    </div>
  </div>
);

SearchGroup.propTypes = {
  filter: string.isRequired,
  search: string.isRequired,
  avalilableFilterList: arrayOf(string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchGroup;
