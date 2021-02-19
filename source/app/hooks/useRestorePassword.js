import apiConnect from 'app/apiConnect';
import { getEmailError } from 'app/helpers/validators';
import { useState } from 'react';
import { useHistory } from 'react-router';

const useRestorePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [values, setValues] = useState({});
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleErrorMessage = (errorText) => {
    setErrorMessage(errorText);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRemoveError = (event) => {
    setInputWithErrors(
      inputWithErrors.filter(
        (currentError) => currentError !== event.target.name,
      ),
    );
  };

  const validateInputs = () => {
    if (getEmailError(values.email)) {
      handleErrorMessage(getEmailError(values.email));
      setInputWithErrors(['email']);
      return false;
    }
    return true;
  };

  const handleRestorePassword = async () => {
    setIsLoading(true);

    const response = await apiConnect({
      url: 'user/restorepassword',
      method: 'post',
      data: values,
    });

    if (response.status === 'error') {
      handleErrorMessage(response.errorMessage);
      setIsLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => {
        history.replace('/landing');
      }, 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) handleRestorePassword();
  };

  return {
    isLoading,
    errorMessage,
    handleSubmit,
    success,
    inputProps: {
      values,
      inputWithErrors,
      onFocus: handleRemoveError,
      onChange: handleInputChange,
    },
  };
};

export default useRestorePassword;
