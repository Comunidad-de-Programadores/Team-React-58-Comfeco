/* eslint-disable no-underscore-dangle */
import apiConnect from 'app/apiConnect';
import { useEffect } from 'react';
import { useFetch, useState } from 'react-fetch-ssr';
import useSession from './useSession';

const useActivities = () => {
  const { session } = useSession();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let _isMounted = true;

  useFetch(async () => {
    if (!activities.length) {
      setIsLoading(true);

      const response = await apiConnect({
        method: 'get',
        url: '/user/activity',
        headers: { Authorization: `Bearer ${session.token}` },
      });

      if (response.status === 'error') {
        if (_isMounted) setIsLoading(false);
        console.error(response.errorMessage);
      } else if (_isMounted) {
        setActivities(response.activities);
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(
    () => () => {
      _isMounted = false;
    },
    []
  );

  return { activities, isLoading };
};

export default useActivities;
