import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/users">Users</Link></li>
        <li className="nav-item"><Link to="/add-user">Add User</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
