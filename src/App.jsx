import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import UserList from "./components/userList";
import NewUserForm from "./components/UserForm";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<NewUserForm />} />
          <Route path="/" element={<h1>Welcome to the User Management System</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
