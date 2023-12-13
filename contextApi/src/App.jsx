import { useState } from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Alkaf and React </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
