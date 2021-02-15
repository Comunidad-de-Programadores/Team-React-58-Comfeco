/* eslint-disable react/destructuring-assignment */
import { string, array, object } from 'prop-types';

import React from 'react';

const Input = ({ name, values, inputWithErrors, ...otherProps }) => {
  const value = values[name];
  const error = inputWithErrors.includes(name);
  const styleForError = { borderColor: 'red' };

  return (
    <input
      {...otherProps}
      name={name}
      value={value || ''}
      style={error ? styleForError : {}}
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
};

export default Input;
