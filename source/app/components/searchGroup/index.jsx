/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './styles.css';

const SearchGroup = () => (
  <div className={styles.searchGroup}>
    <select className={styles.searchGroup__filter} defaultValue="1" name="" id="">
      <option key="1" value="">
        Filtrar por lenguaje
      </option>
      <option value="Javascript">Javascript</option>
      <option value="Python">Python</option>
    </select>

    <div className={styles.searchGroup__input}>
      <input type="text" name="search" id="" placeholder="Buscar grupo" />
      <i className="fas fa-search"></i>
    </div>
  </div>
);

export default SearchGroup;
