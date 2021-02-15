/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { useState } from 'react';
import { getEmailError, getPasswordError, getUserNameError } from 'app/helpers/validators';
import { useHistory } from 'react-router';
import apiConnect from '../apiConnect';

const useLogin = () => {
  const [values, setValues] = useState({}); // state of form
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

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
    if (getEmailError(values.usernameoremail) && getUserNameError(values.usernameoremail)) {
      setInputWithErrors(['usernameoremail']);
      handleErrorMessage('correo o nombre de usuario no valido');
      return false;
    }
    if (getPasswordError(values.password)) {
      setInputWithErrors(['password']);
      handleErrorMessage(getPasswordError(values.password));
      return false;
    }
    return true;
  };

  /**
   * start session and set errors if exist
   */
  const handleStartSession = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await apiConnect({ url: '/user/login', method: 'post', data: values });
    if (response.status === 'error') {
      handleErrorMessage(response.errorMessage);
      setLoading(false);
    } else {
      history.replace('/landing');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) handleStartSession();
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
