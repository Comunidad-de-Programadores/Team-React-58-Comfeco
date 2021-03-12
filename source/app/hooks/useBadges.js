import apiConnect from 'app/apiConnect';
import { useState, useFetch } from 'react-fetch-ssr';

const useBadges = () => {
  const [badges, setBadges] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useFetch(async () => {
    const response = await apiConnect({
      method: 'get',
      url: '/badge',
      data: { badges },
    });
    setBadges(response.badges);
    setLoading(false);
  }, []);

  return {
    isLoading,
    badges,
  };
};

export default useBadges;
