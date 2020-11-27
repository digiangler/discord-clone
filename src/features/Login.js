import { Button } from "@material-ui/core";

import React from "react";

import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    //do clever google login shazz
    auth.signInWithPopup(provider).catch((error) => error.message);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
