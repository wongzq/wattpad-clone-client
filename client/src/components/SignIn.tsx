import * as React from "react";
import "./SignIn.css";

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  return (
    <div className="sign-in-overlay">
      <div className="sign-in-container">
        <i className="material-icons btn-close">close</i>
        <div className="sign-in-form">
          <h5>Join Wattpad</h5>
          <p>
            Be part of a global community of readers and writers, all connected
            through the power of story.
          </p>
          <form action="">
            <label>Username</label>
            <label>Email</label>
            <label>Password</label>
          </form>
        </div>
      </div>
    </div>
  );
}
