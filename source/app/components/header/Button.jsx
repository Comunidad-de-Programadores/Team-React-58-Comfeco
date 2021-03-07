import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ children, type }) => (
  <>
    <button className={styles.basic} type={type === 'button' ? 'button' : 'submit'}>
      {children}
    </button>
  </>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
