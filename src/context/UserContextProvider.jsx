// this is our store where all the states, api calls that we want to pass to different components is stored.
import React, {useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    // All the states, API calls should be done here only.
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
