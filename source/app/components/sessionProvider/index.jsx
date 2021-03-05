/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react-fetch-ssr';
import sessionContext from 'app/context/session';
import { object, array, oneOfType } from 'prop-types';
import { withRouter } from 'react-router';
import apiConnect from '../../apiConnect';

const SessionProvider = ({ children, staticContext = {} }) => { 
  const [state, setState] = useState(staticContext.session);

  const handleSetSession = (newSession) => {
    document.cookie = `session= ${JSON.stringify(newSession)}`
    setState(newSession);
  }


  const handleRefreshSession = async () => {
    if (state) {
      const response = await apiConnect({
        method: 'get',
        url: '/user',
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      handleSetSession(response);
    }
  };

  return (
    <sessionContext.Provider value={{ session: state, setSession: handleSetSession, refreshSession: handleRefreshSession }}>
      {children}
    </sessionContext.Provider>
  );
};

SessionProvider.defaultProps = {
  staticContext: {},
}

SessionProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
  staticContext: object
};

export default withRouter(SessionProvider);
