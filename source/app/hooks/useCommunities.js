import apiConnect from 'app/apiConnect';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useSession from './useSession';

const useCommunities = () => {
  const { session, setSession } = useSession();
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
        setSession({ ...session, communities: [...session.communities, communityId] });
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
      setSession({
        ...session,
        communities: session.communities.filter((item) => item !== communityId),
      });
      console.info(response);
    }
  };

  const verifyJoinedCommunity = (data) => {
    if (session) {
      return data.map((item) =>
        session.communities.includes(item.id)
          ? { ...item, joined: true }
          : { ...item, joined: false }
      );
    }

    const localSession = JSON.parse(localStorage.getItem('session'));

    if (localSession) {
      return data.map((item) =>
        localSession.communities.includes(item.id)
          ? { ...item, joined: true }
          : { ...item, joined: false }
      );
    }

    return data.map((item) => ({ ...item, joined: false }));
  };

  useEffect(() => {
    const getCommunities = async () => {
      setIsLoading(true);
      const response = await apiConnect({ url: '/community', method: 'get' });

      if (response.status === 'error') {
        setIsLoading(false);
        console.log(response.errorMessage);
      } else {
        setIsLoading(false);
        setCommunities(verifyJoinedCommunity(response.communities));
      }
    };
    getCommunities();
  }, []);

  useEffect(() => {
    setCommunities(verifyJoinedCommunity(communities));
  }, [session]);

  return { communities, isLoading, handleJoinCommunity, handleLeaveCommunity };
};

export default useCommunities;
