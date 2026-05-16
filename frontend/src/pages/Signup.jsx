import { useState } from "react";

import API from "../api";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
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

      await API.post(
        "/auth/signup",
        formData
      );

      alert("Signup Successful");

      window.location.href = "/login";

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <br />
        <br />

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

        <select
          name="role"
          onChange={handleChange}
        >

          <option value="candidate">
            Candidate
          </option>

          <option value="admin">
            Admin
          </option>

        </select>

        <br />
        <br />

        <button type="submit">
          Signup
        </button>

      </form>

      <br />

      <a href="/login">
        Already have account?
      </a>

    </div>
  );
};

export default Signup;