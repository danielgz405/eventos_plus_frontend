import { endPoints } from 'api';
import axios from 'axios';

const getPlaceById = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.places.getPlaceById(id), config);
  return response.data;
};

const listPLaceAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.get(endPoints.places.listAll, config);
  return response.data;
};

export { getPlaceById, listPLaceAll };
