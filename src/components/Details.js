import React, { useContext } from "react";
import UserContext from "../store/user-context";
import User from "./User";

const Details = () => {
  const userCtx = useContext(UserContext);

  console.log("Details..");
  return (
    <>
      <User />
      <h2>{userCtx}</h2>
    </>
  );
};

export default Details;
