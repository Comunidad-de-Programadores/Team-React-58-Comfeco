import React, { useState } from 'react';
import sessionContext from 'app/context/session';
import { object, array, oneOfType } from 'prop-types';

const SessionProvider = ({ children }) => {
  const [state, setState] = useState({ communities: [] });

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
