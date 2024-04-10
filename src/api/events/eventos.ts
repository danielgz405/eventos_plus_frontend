import { endPoints } from '../index';
import axios from 'axios';
import { EventSchemaDto, EventUpdatedSchemaDto } from './eventDto';

const listEvent = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.events.listEventByPages(limit, page), config);
  return response.data;
};

const listEventAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.events.listAll, config);
  return response.data;
};

const createEvent = async (Event: EventSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.events.createEvent, Event, config);
  return response.data;
};

const deleteEvent = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.events.deleteEvent(id), config);
  return response.data;
};

const updateEvent = async (id: string, data: EventUpdatedSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.events.updatedEvent(id), data, config);
  return response.data;
};

export { listEvent, listEventAll, createEvent, deleteEvent, updateEvent };
