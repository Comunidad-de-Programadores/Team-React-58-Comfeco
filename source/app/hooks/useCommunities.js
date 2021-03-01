/* eslint-disable no-underscore-dangle */
import apiConnect from 'app/apiConnect';
import sessionContext from 'app/context/session';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const useCommunities = () => {
  const { session, setSession } = useContext(sessionContext);
  const [isLoading, setIsLoading] = useState(false);
  const [communities, setCommunities] = useState([]);
  const history = useHistory();

  const handleJoinCommunity = async (communityId) => {
    if (!session) {
      history.replace('/auth');
    } else {
      const { token, _id } = session;

      const response = await apiConnect({
        method: 'post',
        url: '/user/community',
        data: { communityId, session: { _id } },
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
    const { token, _id } = session;
    const response = await apiConnect({
      method: 'delete',
      url: '/user/community',
      data: { communityId, session: { _id } },
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
