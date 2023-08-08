import React, { useContext } from "react";
import UserContext from "../store/user-context";

const User = () => {
  const userCtx = useContext(UserContext);
  console.log("user component..");
  return (
    <>
      <p>User: {userCtx}</p>
    </>
  );
};

export default User;
