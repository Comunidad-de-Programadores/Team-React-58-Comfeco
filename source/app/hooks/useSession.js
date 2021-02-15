import { useContext } from 'react';
import sessionContext from 'app/context/session';

const useSession = () => {
  const { session, setSession } = useContext(sessionContext);
  return { session, setSession };
};

export default useSession;
