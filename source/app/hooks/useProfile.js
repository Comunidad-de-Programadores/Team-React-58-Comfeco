import { useEffect, useState } from 'react';
import { getPasswordError } from 'app/helpers/validators';
import apiConnect from 'app/apiConnect';
import useSession from './useSession';

const useProfile = () => {
  const { session, setSession } = useSession();
  const [values, setValues] = useState({});
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.trim() });

    if (e.target.value === '') {
      delete values[e.target.name];
      setValues({ ...values });
    }
  };

  const handleErrorMessage = (errorText) => {
    setErrorMessage(errorText);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const handleRemoveError = (event) => {
    setInputWithErrors(
      inputWithErrors.filter((currentError) => currentError !== event.target.name)
    );
  };

  const validatePasswordFields = () => {
    const { password, confirmPassword } = values;

    if (getPasswordError(password) && password !== undefined) {
      handleErrorMessage(getPasswordError(password));
      setInputWithErrors(['password']);
      return false;
    }

    if (password !== confirmPassword) {
      handleErrorMessage('Las contraseñas no coinciden');
      setInputWithErrors(['password', 'confirmpassword']);
      return false;
    }
    return true;
  };

  const handleUpdateProfile = async () => {
    setIsLoading(true);

    const { token } = session;
    const response = await apiConnect({
      method: 'patch',
      url: '/user',
      data: values,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 'error') {
      setIsLoading(false);
      console.error(response.errorMessage);
    } else {
      setIsLoading(false);
      setSession({ ...session, ...values });
      console.info(response);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validatePasswordFields();

    if (isValid) handleUpdateProfile();
  };

  useEffect(() => {
    if (session) {
      setValues({
        ...values,
        username: session.username || null,
        email: session.email || null,
        gender: session.gender || null,
        country: session.country || null,
        facebook: session.facebook || null,
        twitter: session.twitter || null,
        github: session.github || null,
        linkedin: session.linkedin || null,
      });
    }
  }, [session]);

  return {
    handleSubmit,
    errorMessage,
    isLoading,
    values,
    inputProps: {
      onFocus: handleRemoveError,
      onChange: handleInputChange,
    },
  };
};

export default useProfile;
