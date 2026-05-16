import { useState } from "react";

import API from "../api";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // ADMIN LOGIN

      if (res.data.user.role === "admin") {

        window.location.href = "/admin";

      } else {

        window.location.href = "/candidate";

      }

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <a href="/signup">
        Create Account
      </a>

    </div>
  );
};

export default Login;