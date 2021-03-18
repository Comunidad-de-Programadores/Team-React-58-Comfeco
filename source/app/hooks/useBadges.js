import apiConnect from 'app/apiConnect';
import { useState, useFetch } from 'react-fetch-ssr';
import useSession from './useSession';

const useBadges = () => {
  const { session } = useSession();
  const [state, setState] = useState({ badges: [], isLoading: true });
  const [userBadges, setUserBadges] = useState([]);

  useFetch(async () => {
    const response = await apiConnect({
      method: 'get',
      url: '/badge',
    });
    setState({ badges: response.badges, isLoading: false });
  }, []);

  useFetch(async () => {
    if (!userBadges.length) {
      const response = await apiConnect({
        method: 'get',
        url: '/user/badge',
        headers: { Authorization: `Bearer ${session.token}` },
      });

      setUserBadges([...response.badges]);
    }
  }, []);

  return { state, userBadges };
};

export default useBadges;
