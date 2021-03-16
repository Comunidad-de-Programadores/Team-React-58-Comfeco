/* eslint-disable no-alert */
import { useFetch, useState } from 'react-fetch-ssr';
import apiConnect from '../apiConnect';
import useSession from './useSession';

const useEvents = (setNotification) => {
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useSession();

  const handleAddEvent = async (eventId) => {
    setMyEvents([...myEvents, { id: eventId }]); // optimistic update
    await apiConnect({
      method: 'post',
      url: '/user/event',
      headers: { Authorization: `Bearer ${session.token}` },
      data: { eventId },
    });
    setNotification({ type: 'success', message: 'Te uniste al evento correctamente' });
  };

  const handleEventLeave = async (eventId) => {
    setMyEvents(myEvents.filter((e) => e.id !== eventId)); // optimistic update
    await apiConnect({
      method: 'delete',
      url: '/user/event',
      headers: { Authorization: `Bearer ${session.token}` },
      data: { eventId },
    });
    setNotification({ type: 'success', message: 'Abandonaste el evento' });
  };

  // fetch initial data
  useFetch(async () => {
    if (!events.length) {
      setIsLoading(true);
      const responseEvents = await apiConnect({ method: 'get', url: '/event' });
      const responseMyEvents = await apiConnect({
        method: 'get',
        url: '/user/event',
        headers: { Authorization: `Bearer ${session.token}` },
      });
      setIsLoading(false);
      setMyEvents(responseMyEvents.events);
      setEvents(responseEvents.events);
    }
  }, []);

  const composedIventsWithMyEvents = events.map((event) => {
    const myEventsId = myEvents.map((myEvent) => myEvent.id);
    const currentEvent = { ...event };
    if (myEventsId.includes(event.id)) currentEvent.joined = true;
    return currentEvent;
  });

  return {
    isLoading,
    events: composedIventsWithMyEvents,
    handleAddEvent,
    handleEventLeave,
  };
};

export default useEvents;
