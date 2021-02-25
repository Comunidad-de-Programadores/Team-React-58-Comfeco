import apiConnect from 'app/apiConnect';
import { useEffect, useState } from 'react';

const useCommunities = () => {
  const [state, setState] = useState({ isLoading: false, data: [] });

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

  return state;
};

export default useCommunities;
