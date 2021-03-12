import apiConnect from 'app/apiConnect';
import { useState } from 'react';

const useBadges = () => {
    const [badges, setBadges] = useState([]);

  const handleBadges = async () => {

    const response = await apiConnect({
      method: 'get',
      url: '/badge',
      data: { badges },
    });

    return response;
  };

  return {
    handleBadges,
  };
};

export default useBadges;
