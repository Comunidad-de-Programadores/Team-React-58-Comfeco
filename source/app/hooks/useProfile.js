import { useEffect, useState } from 'react';
import { getPasswordError } from 'app/helpers/validators';
import apiConnect from 'app/apiConnect';
import useSession from './useSession';

const useProfile = (onSuccess) => {
  const { session, refreshSession } = useSession();
  const [values, setValues] = useState({});
  const [inputWithErrors, setInputWithErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    if (
      (e.target.name === 'github' && e.target.value === '') ||
      (e.target.name === 'facebook' && e.target.value === '') ||
      (e.target.name === 'twitter' && e.target.value === '') ||
      (e.target.name === 'linkedin' && e.target.value === '')
    ) {
      setValues({ ...values, [e.target.name]: null });
    } else if (e.target.value === '') {
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
      if (response.errorMessage === 'the username is already registered') {
        handleErrorMessage('El nombre de uduario ya esta en uso');
      }
    } else {
      onSuccess();
      setIsLoading(false);
      await refreshSession();
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
        birthdate: session.birthdate || null,
        country: session.country || null,
        facebook: session.facebook || null,
        twitter: session.twitter || null,
        github: session.github || null,
        linkedin: session.linkedin || null,
        biography: session.biography || null,
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
