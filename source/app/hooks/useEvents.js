import { useFetch, useState } from 'react-fetch-ssr';
import apiConnect from '../apiConnect';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useFetch(async () => {
    const response = await apiConnect({ method: 'get', url: '/event' });
    setIsLoading(false);
    setEvents(response.events);
  }, []);

  return {
    isLoading,
    events,
  };
};

export default useEvents;
