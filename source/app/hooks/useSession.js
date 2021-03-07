import { useContext } from 'react';
import sessionContext from 'app/context/session';

/**
 * @returns {{ session: {}, setSession: function, refreshSession: function, closeSession: function }}
 */
const useSession = () => useContext(sessionContext);

export default useSession;
