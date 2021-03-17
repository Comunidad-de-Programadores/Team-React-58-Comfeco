import useSession from 'app/hooks/useSession';
import React from 'react';
import { Redirect } from 'react-router';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const { session } = useSession();

    return (
      <>
        {!session && <Redirect to="/" />}
        {session && <WrappedComponent {...props} />}
      </>
    );
  };

  return WithAuth;
};

export default withAuth;
