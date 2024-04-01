import axios from 'axios';
import { endPoints } from '..';
import { UserSchemaDto, upadateUserDataDto } from './usersSchemasDto';

const createUser = async (user: UserSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.users.createUser, user, config);
  return response.data;
};

const getUsers = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.users.getUsers, config);
  return response.data;
};

const updateUser = async (userId: string, user: upadateUserDataDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.users.updateUser(userId), user, config);
  return response.data;
};

const deleteUser = async (userId: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.users.deleteUser(userId), config);
  return response.data;
};

export { createUser, getUsers, updateUser, deleteUser };
