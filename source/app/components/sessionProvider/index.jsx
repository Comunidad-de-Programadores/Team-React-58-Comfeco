/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react-fetch-ssr';
import sessionContext from 'app/context/session';
import { object, array, oneOfType } from 'prop-types';
import { useHistory, withRouter } from 'react-router';
import apiConnect from '../../apiConnect';

const SessionProvider = ({ children, staticContext = {} }) => {
  const [state, setState] = useState(staticContext.session);
  const history = useHistory();

  const handleSetSession = (newSession) => {
    document.cookie = `session= ${encodeURIComponent(JSON.stringify(newSession))}`;
    setState(newSession);
  };

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

  const handleCloseSession = () => {
    document.cookie = 'session= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    history.replace('/landing');

    setState(null);
  };

  return (
    <sessionContext.Provider
      value={{
        session: state,
        setSession: handleSetSession,
        refreshSession: handleRefreshSession,
        closeSession: handleCloseSession,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
};

SessionProvider.defaultProps = {
  staticContext: {},
};

SessionProvider.propTypes = {
  children: oneOfType([array, object]).isRequired,
  staticContext: object,
};

export default withRouter(SessionProvider);
