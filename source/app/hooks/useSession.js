import { useContext, useEffect } from 'react';
import sessionContext from 'app/context/session';

const useSession = () => {
  const { session, setSession } = useContext(sessionContext);

  const checkForSession = () => {
    const localSession = JSON.parse(localStorage.getItem('session'));
    if (localSession !== null) {
      return localSession;
    }

    return session;
  };

  useEffect(() => {
    const localSession = JSON.parse(localStorage.getItem('session'));
    if (localSession !== null) {
      setSession(localSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify(session));
  }, [session]);

  return { session, setSession, checkForSession };
};

export default useSession;
