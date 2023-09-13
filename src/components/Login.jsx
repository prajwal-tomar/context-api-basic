import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // here we're setting the data so we called setUser. To use the data we will call user.
  const { user, setUser } = useContext(UserContext);

  // for setting the state that was defined inside UserContext file.
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    console.log(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
