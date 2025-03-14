import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("User added successfully!");
      setUsers([...users, response.data]);
      reset();
      navigate("/users");
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Failed to add user.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <div className="form-group">
          <label>Enter First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First Name is Required" })}
            className="form-input"
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Enter Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last Name is Required" })}
            className="form-input"
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Enter Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="form-input"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
