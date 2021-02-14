/* eslint-disable no-shadow */
import { useState } from 'react';
import { isEmailValid, isPasswordValid } from 'app/helpers/validators';

const useLogin = () => {
  const [values, setValues] = useState({}); // state of form
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  /**
   * set error message and hides after five seconds
   */
  const handleErrorMessage = (errorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  /**
   * handle input change
   * @param {{}} event
   */
  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * remove error when input focused
   * @param {*} event
   */
  const handleRemoveError = (event) => {
    setInputWithErrors(
      inputWithErrors.filter((currentError) => currentError !== event.target.name),
    );
  };

  /**
   * validate require inputs
   * @return {boolean|Array} false or array of inputs with error
   */
  const validateInputs = () => {
    const inputWithErrors = [];
    if (!isEmailValid(values.email)) inputWithErrors.push('email');
    if (!isPasswordValid(values.password)) inputWithErrors.push('password');
    return inputWithErrors.length ? inputWithErrors : false;
  };

  const handleStartSession = async () => {
    setLoading(true);
    // do something here,
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputWithErrors = validateInputs();
    if (inputWithErrors) {
      setInputWithErrors(inputWithErrors);
      handleErrorMessage('Alguno datos son incorrectos');
    } else handleStartSession();
  };

  return {
    handleSubmit,
    errorMessage,
    isLoading,
    inputProps: {
      values,
      inputWithErrors,
      onFocus: handleRemoveError,
      onChange: handleInputChange,
    },
  };
};

export default useLogin;
