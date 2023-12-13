import { useState, useContext } from "react";
import React from "react";
import UserContext from "../Context/UserContext";
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let { setUser } = useContext(UserContext);
  let handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Your UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Password Here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
export default Login;
