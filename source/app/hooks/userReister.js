/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { useState } from 'react';
import { getEmailError, getFullNameError, getPasswordError, getUserNameError } from 'app/helpers/validators';

const useRegister = () => {
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
   * @param {{}}} event
   */
  const handleRemoveError = (event) => {
    setInputWithErrors(
      inputWithErrors.filter((currentError) => currentError !== event.target.name),
    );
  };

  /**
   * validate inputs and set set errors
   * @return {boolean} validations statis
   */
  const validateInputs = () => {
    if (getUserNameError(values.username)) {
      handleErrorMessage(getUserNameError(values.username));
      setInputWithErrors(['username']);
      return false;
    }
    if (getFullNameError(values.fullname)) {
      handleErrorMessage(getFullNameError(values.fullname));
      setInputWithErrors(['fullname']);
      return false;
    }
    if (getFullNameError(values.fullname)) {
      handleErrorMessage(getFullNameError(values.fullname));
      setInputWithErrors(['fullname']);
      return false;
    }
    if (getEmailError(values.email)) {
      handleErrorMessage(getEmailError(values.email));
      setInputWithErrors(['email']);
      return false;
    }
    if (getPasswordError(values.password)) {
      handleErrorMessage(getPasswordError(values.password));
      setInputWithErrors(['password']);
      return false;
    }
    if (values.password !== values.confirmpassword) {
      handleErrorMessage('Las contraseñas no coinciden');
      setInputWithErrors(['password', 'confirmpassword']);
      return false;
    }
    return true;
  };

  /**
   * start session and set errors if exist
   */
  const handleStartRegister = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = { error: true, errorMessage: 'el correo ya esta registrado' };
    if (response.error) {
      handleErrorMessage(response.errorMessage);
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) handleStartRegister();
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

export default useRegister;
