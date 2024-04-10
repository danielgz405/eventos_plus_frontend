import { endPoints } from 'api';
import axios from 'axios';

const listTypeEventAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.get(endPoints.typeEvent.listAll, config);
  return response.data;
};

export { listTypeEventAll };
