import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const ErrorMessage = ({ children }) => (
  <div className={styles.errorMessage}>
    <i className="fas fa-exclamation fa-2x" />
    <p>{children}</p>
  </div>
);

ErrorMessage.propTypes = { children: PropTypes.string.isRequired };

export default ErrorMessage;
