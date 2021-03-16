import { useState } from 'react';
import { getPasswordError } from 'app/helpers/validators';
import { useParams } from 'react-router';
import apiConnect from '../apiConnect';

const useCreateNewPassword = () => {
  const [values, setValues] = useState({}); // state of form
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { token } = useParams();

  /**
   * set error message and hides after five seconds
   */
  const handleErrorMessage = (errorText) => {
    setErrorMessage(errorText);
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
      inputWithErrors.filter((currentError) => currentError !== event.target.name)
    );
  };

  /**
   * validate inputs and set errors
   * @return {boolean} validations statis
   */
  const validateInputs = () => {
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
  const handleCreateNewPassword = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await apiConnect({
      url: '/user/confirmrestorepassword',
      method: 'post',
      data: {
        password: values.password,
        token,
      },
    });
    if (response.status === 'error') {
      handleErrorMessage(response.errorMessage);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) handleCreateNewPassword();
  };

  return {
    handleSubmit,
    errorMessage,
    isLoading,
    isSuccess,
    inputProps: {
      values,
      inputWithErrors,
      onFocus: handleRemoveError,
      onChange: handleInputChange,
    },
  };
};

export default useCreateNewPassword;
