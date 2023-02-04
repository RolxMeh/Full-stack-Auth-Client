import React, { useState } from "react";
import Axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const formInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/register", {
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <div className="w-72 h-40 border flex justify-center items-center flex-col">
      <input
        onChange={formInput}
        name="username"
        value={formData.username}
        placeholder="Username"
        className="mb-2 login_input"
      />
      <input
        onChange={formInput}
        name="password"
        value={formData.password}
        placeholder="Password"
        className="login_input "
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-400 mt-2  w-20 h-7 rounded-2xl"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
