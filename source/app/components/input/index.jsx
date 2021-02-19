/* eslint-disable react/destructuring-assignment */
import { string, array, object } from 'prop-types';

import React from 'react';

const Input = ({ name, values, inputWithErrors, type, ...otherProps }) => {
  const value = values[name];
  const error = inputWithErrors.includes(name);
  const styleForError = { borderColor: 'red' };

  return (
    <input
      {...otherProps}
      name={name}
      value={value || ''}
      style={error ? styleForError : {}}
      type={type}
    />
  );
};

Input.defaultProps = {
  values: [],
  name: '',
  inputWithErrors: [],
};

Input.propTypes = {
  values: object,
  name: string,
  inputWithErrors: array,
  type: string.isRequired,
};

export default Input;
