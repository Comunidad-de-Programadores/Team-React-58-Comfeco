/* eslint-disable no-unused-expressions */
import apiConnect from 'app/apiConnect';
import { useFetch, useState } from 'react-fetch-ssr';
import { useHistory } from 'react-router';
import useSession from './useSession';

const useCommunities = (setNotification) => {
  const { session, refreshSession } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [communityIdLoading, setCommunityIdLoading] = useState(null);
  const history = useHistory();

  const handleJoinCommunity = async (communityId) => {
    if (!session) {
      history.push('/auth');
    } else {
      setCommunityIdLoading(communityId);
      const response = await apiConnect({
        method: 'post',
        url: '/user/community',
        data: { communityId },
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      if (response.status === 'error') {
        console.error(response.errorMessage);
      } else {
        await refreshSession();
        setNotification({ type: 'success', message: 'Te uniste a la comunidad correctamente' });
        console.info(response);
      }
      setCommunityIdLoading(null);
    }
  };

  const handleLeaveCommunity = async (communityId) => {
    setCommunityIdLoading(communityId);
    const { token } = session;
    const response = await apiConnect({
      method: 'delete',
      url: '/user/community',
      data: { communityId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 'error') {
      console.error(response.errorMessage);
    } else {
      setNotification({ type: 'success', message: 'Saliste de la comunidad!' });
      await refreshSession();
      console.info(response);
    }
    setCommunityIdLoading(null);
  };

  const verifyJoinedCommunity = (data) => {
    if (session) {
      if (session.communities) {
        return data.map((item) =>
          session.communities.includes(item.id)
            ? { ...item, joined: true }
            : { ...item, joined: false }
        );
      }
    }
    return data.map((item) => ({ ...item, joined: false }));
  };

  useFetch(async () => {
    if (!communities.length) {
      setIsLoading(true);
      const response = await apiConnect({ url: '/community', method: 'get' });

      if (response.status === 'error') {
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setCommunities(response.communities);
      }
    }
  }, []);

  return {
    communities: verifyJoinedCommunity(communities),
    isLoading,
    handleJoinCommunity,
    handleLeaveCommunity,
    communityIdLoading,
  };
};

export default useCommunities;
