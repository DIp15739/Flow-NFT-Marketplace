import React, { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

const AuthCluster = () => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser().subscribe(setUser), []);
  if (user.loggedIn) {
    return (
      <div className="nav">
        <span style={{ marginRight: "2rem" }}>
          {user?.addr ?? "No Address"}
        </span>
        <button className="btn-primary" onClick={fcl.unauthenticate}>
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <button className="btn-primary" onClick={fcl.logIn}>
          Log In
        </button>
        <button className="btn-secondary" onClick={fcl.signUp}>
          Sign Up
        </button>
      </div>
    );
  }
};

export default AuthCluster;
