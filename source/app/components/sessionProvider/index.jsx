/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import sessionContext from 'app/context/session';
import { object, array, oneOfType } from 'prop-types';
import apiConnect from '../../apiConnect';

const SessionProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const handleRefreshSession = async () => {
    if (state) {
      const response = await apiConnect({
        method: 'get',
        url: '/user',
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      setState(response);
    }
  };

  return (
    <sessionContext.Provider value={{ session: state, setSession: setState, refreshSession: handleRefreshSession }}>
      {children}
    </sessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: oneOfType(array, object).isRequired,
};

export default SessionProvider;
