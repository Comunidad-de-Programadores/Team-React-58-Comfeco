/* eslint-disable react/destructuring-assignment */
import { string, array } from 'prop-types';

import React from 'react';

const Input = ({ name, values, inputWithErrors, ...otherProps }) => {
  const value = values[name];
  const error = inputWithErrors[name];
  const styleForError = { borderColor: 'red' };

  return (
    <input
      {...otherProps}
      name={name}
      value={value}
      style={error ? styleForError : {}}
    />
  );
};

Input.propTypes = {
  values: array.isRequired,
  name: string.isRequired,
  inputWithErrors: array.isRequired,
};

export default Input;
