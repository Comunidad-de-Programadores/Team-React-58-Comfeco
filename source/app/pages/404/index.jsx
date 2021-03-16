import React from 'react';
import PageNotFoundCard from 'app/components/pageNotFound/index.jsx';
import styles from './styles.css';

const PageNotFoundScreen = () => (
  <div className={styles.PageNotFoundScreen__main__content__wrapper}>
    <PageNotFoundCard />
  </div>
);

export default PageNotFoundScreen;
