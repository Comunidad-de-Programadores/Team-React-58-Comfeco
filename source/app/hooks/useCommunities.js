/* eslint-disable no-underscore-dangle */
import apiConnect from 'app/apiConnect';
import sessionContext from 'app/context/session';
import { useContext, useEffect, useState } from 'react';

const useCommunities = () => {
  const { session } = useContext(sessionContext);

  const [state, setState] = useState({ isLoading: false, data: [] });

  const handleJoinCommunity = async (communityId) => {
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
      console.log(response);
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
      console.log(response);
    }
  };

  useEffect(() => {
    const getCommunities = async () => {
      setState({ ...state, isLoading: true });

      const response = await apiConnect({ url: '/community', method: 'get' });

      if (response.status === 'error') {
        console.log(response.errorMessage);
        setState({ ...state, isLoading: false });
      } else {
        setState({ ...state, data: response.communities });
      }
    };
    getCommunities();
  }, []);

  return { state, handleJoinCommunity, handleLeaveCommunity, session };
};

export default useCommunities;
