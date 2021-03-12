import apiConnect from 'app/apiConnect';
import { useState, useFetch } from 'react-fetch-ssr';

const useBadges = () => {
  const [state, setState] = useState({ badges: [], isLoading: true });

  useFetch(async () => {
    const response = await apiConnect({
      method: 'get',
      url: '/badge',
    });
    setState({ badges: response.badges, isLoading: false });
  }, []);

  return state;
};

export default useBadges;
