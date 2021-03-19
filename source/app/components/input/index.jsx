/* eslint-disable react/destructuring-assignment */
import { string, array, object, any } from 'prop-types';

import React from 'react';

const Input = ({ name, values, inputWithErrors, type, value, ...otherProps }) => {
  const valueCalculated = value || values[name];
  const error = inputWithErrors.includes(name);
  const styleForError = { borderColor: 'red' };

  return (
    <input
      {...otherProps}
      name={name}
      value={valueCalculated || ''}
      style={error ? styleForError : {}}
      type={type}
    />
  );
};

Input.defaultProps = {
  values: [],
  name: '',
  inputWithErrors: [],
  value: '',
};

Input.propTypes = {
  values: object,
  name: string,
  inputWithErrors: array,
  type: string.isRequired,
  value: any,
};

export default Input;
