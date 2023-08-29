import React, { useState } from "react";
import "./Authentication.css";
import axios from "axios";

function Authentication({ setUser, setSession }) {
  const [data, setData] = useState(null);

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        userid: data.email,
        password: data.password,
      },
    };

    axios
      .post("http://localhost:5000/auth", config)
      .then((res) => {
        console.log(res.data);
        setSession(res.data.session);
        setUser(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Authentication;
