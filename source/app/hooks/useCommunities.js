import apiConnect from 'app/apiConnect';
import { useFetch, useState } from 'react-fetch-ssr';
import { useHistory } from 'react-router';
import useSession from './useSession';

const useCommunities = () => {
  const { session, refreshSession } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  const history = useHistory();

  const handleJoinCommunity = async (communityId) => {
    if (!session) {
      history.push('/auth');
    } else {
      const { token } = session;

      const response = await apiConnect({
        method: 'post',
        url: '/user/community',
        data: { communityId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 'error') {
        console.error(response.errorMessage);
      } else {
        await refreshSession();
        console.info(response);
      }
    }
  };

  const handleLeaveCommunity = async (communityId) => {
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
      await refreshSession();
      console.info(response);
    }
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
        console.log(response.errorMessage);
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
  };
};

export default useCommunities;
