import React, { useEffect, useState } from 'react';
import sessionContext from 'app/context/session';
import { object, array, oneOfType } from 'prop-types';

const SessionProvider = ({ children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const localSession = JSON.parse(localStorage.getItem('session'));

    if (localSession) {
      setState(localSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify(state));
  }, [state]);

  return (
    <sessionContext.Provider value={{ session: state, setSession: setState }}>
      {children}
    </sessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: oneOfType(array, object).isRequired,
};

export default SessionProvider;
