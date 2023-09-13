import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  // As we want to use the user value. hence simple call it and use it.
  const { user } = useContext(UserContext);
  if (!user) return <div>Please first Login</div>;

  return (
    <div>
      <h2>Welcome, {user}</h2>
    </div>
  );
};

export default Profile;
