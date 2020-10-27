import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider, provider2 } from "./firebase";
function Login() {
  const signInGoogle = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  const signInFaceBook = () => {
    auth.signInWithPopup(provider2).catch((error) => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="InstaBook-logo"
        />
        <h1>InstaBook</h1>
      </div>
      <Button onClick={signInGoogle}>SIGN IN WITH GOOGLE</Button>
      <Button onClick={signInFaceBook}>SIGN IN WITH FACEBOOK</Button>
    </div>
  );
}
export default Login;