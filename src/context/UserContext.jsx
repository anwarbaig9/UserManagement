import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

const FetchUsers = () => {
  return useContext(UserContext);
};

export default FetchUsers;
