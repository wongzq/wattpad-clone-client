import * as React from "react";
import "./SignUp.css";

export interface ISignUpProps {}

export default function SignUp(props: ISignUpProps) {
  return (
    <div className="sign-up-overlay">
      <div className="sign-up-dialog">
        <i className="material-icons btn-close">close</i>
        <div className="sign-up-header">
          <h5>Join Wattpad</h5>
          <p>
            Be part of a global community of readers and writers, all connected
            through the power of story.
          </p>
        </div>
        <div className="sign-up-body">
          <form>
            <div>
              <p>Username</p>
              <input type="text" placeholder="Enter username" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <p>Password</p>
              <input type="password" placeholder="Enter password" />
            </div>
            <a className="waves-effect waves-light btn sign-up-btn">
              Sign up with email
            </a>
          </form>
        </div>
        <p className="sign-up-footer">
          If you already have an account, <a href="">Log in</a>
        </p>
      </div>
    </div>
  );
}
