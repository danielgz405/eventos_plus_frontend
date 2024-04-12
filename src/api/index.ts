const API = `${process.env.NEXT_PUBLIC_API_URL}`;

export const endPoints = {
  auth: {
    login: `${API}/login`,
    signup: `${API}/signup`,
  },
  users: {
    getUsers: `${API}/users/list`,
    profile: `${API}/profile`,
    createUser: `${API}/create`,
    updateUser: (id: string) => `${API}/users/update/${id}`,
    deleteUser: (id: string) => `${API}/users/delete/${id}`,
  },
  events: {
    createEvent: `${API}/event/create`,
    getEventById: (id: string) => `${API}/event/${id}`,
    updatedEvent: (id: string) => `${API}/event/updated/${id}`,
    deleteEvent: (id: string) => `${API}/event/delete/${id}`,
    listEventByPages: (limit: string, page: string) => `${API}/event/list/${limit}/${page}`,
    listAll: `${API}/event/list/all`,
    listEventsByName: (limit: string, page: string, name: string) => `${API}/event/list/name/${limit}/${page}/${name}`,
  },
  typeEvent: {
    listAll: `${API}/type_event/list`,
  },
  places: {
    getPlaceById: (id: string) => `${API}/place/one/${id}`,
    listAll: `${API}/place/list`,
  },
  reserve: {
    insertReserve: `${API}/reserve`,
    listReserveUserId: (userId: string) => `${API}/reserve/list/${userId}`
  }
};
