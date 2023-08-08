import React, { useState } from "react";
import UserContext from "../store/user-context";
import Details from "./Details";

const Dashboard = () => {
  const [user, setUser] = useState("Sahil");
  console.log("Dashboard..");
  return (
    <>
      <UserContext.Provider value={user}>
        <h3>Dashboard</h3>
        <button onClick={() => setUser("Md Sahi Alam Khan")}>
          update name
        </button>
        <Details />
      </UserContext.Provider>
    </>
  );
};

export default Dashboard;
