import React, { useState, useEffect, useContext, useMemo } from "react";
import UserTable from "./UserTable";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { users, loading, error } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users.filter(user =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });

    return filtered;
  }, [users, searchQuery, sortOrder]);

  useEffect(() => {
    setFilteredUsers(filteredAndSortedUsers);
  }, [filteredAndSortedUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="users-list">
      <div className="filter-sort-container">
        <input
          type="text"
          placeholder="Search users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="sort-dropdown">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default UserList;
