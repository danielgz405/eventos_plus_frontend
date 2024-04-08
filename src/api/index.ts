const API = `${process.env.NEXT_PUBLIC_API_URL}`;

export const endPoints = {
  auth: {
    login: `${API}/login`,
    signup: `${API}/signup`,
  },
  users: {
    getUsers: `${API}/users/list`,
    profile: `${API}/profile`,
    updateUser: (id: string) => `${API}/users/update/${id}`,
    deleteUser: (id: string) => `${API}/users/delete/${id}`,
  },
};
