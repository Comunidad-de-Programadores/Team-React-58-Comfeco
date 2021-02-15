import axios from 'axios';

const baseApiURL = 'https://fest-api.vercel.app/';

const apiConnect = async (config) => {
  try {
    const response = await axios({ ...config, url: `${baseApiURL}${config.url}` });
    return response.data;
  } catch (error) {
    console.log('apiConnectError', error.toString());
    return error.response.data;
  }
};

export default apiConnect;
