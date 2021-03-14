import apiConnect from 'app/apiConnect';
import { useFetch, useState } from 'react-fetch-ssr';
import useSession from './useSession';

const useActivities = () => {
  const { session } = useSession();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFetch(async () => {
    if (!activities.length) {
      setIsLoading(true);

      const response = await apiConnect({
        method: 'get',
        url: '/user/activity',
        headers: { Authorization: `Bearer ${session.token}` },
      });

      if (response.status === 'error') {
        setIsLoading(false);
        console.error(response.errorMessage);
      } else {
        setActivities(response.activities);
        setIsLoading(false);
      }
    }
  }, []);

  return { activities, isLoading };
};

export default useActivities;
