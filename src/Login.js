import React, { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");

  const formData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const login = () => {
    Axios.post("http://localhost:8000/login", {
      username: userInfo.username,
      password: userInfo.password,
    }).then((res) => {
      if (res.data.message) {
        setLoginStatus(res.data.message);
      } else {
        setLoginStatus(res.data[0].username);
      }
    });
  };

  return (
    <div className="w-72 h-40 border flex justify-center items-center flex-col">
      <input
        onChange={formData}
        value={userInfo.username}
        name="username"
        placeholder="Username"
        className="mb-2 login_input"
      />
      <input
        onChange={formData}
        value={userInfo.password}
        name="password"
        placeholder="Password"
        className="login_input"
      />
      <button
        className="bg-gray-400 mt-2  w-20 h-7 rounded-2xl"
        onClick={login}
      >
        Login
      </button>

      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Login;
