import apiConnect from 'app/apiConnect';
import { useFetch, useState } from 'react-fetch-ssr';

const useBadges = () => {
  const [badges, setBadges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFetch(async () => {
    if (!badges.length) {
      setIsLoading(true);

      const response = await apiConnect({ method: 'get', url: '/badge' });

      if (response.status === 'error') {
        setIsLoading(false);
        console.error(response.errorMessage);
      } else {
        setBadges(response.badges);
        setIsLoading(false);
      }
    }
  }, []);

  return { badges, isLoading };
};

export default useBadges;
