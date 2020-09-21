import * as React from "react";
import "./Auth.css";
import { AuthContext } from "../NavBar/NavBar";
import { EAuthAction } from "../../reducers/Auth.reducer";

////////////////////////////////////////////////////////////////////////////////
export interface ISignUpProps {}
export default function Auth(props: ISignUpProps) {
  // React Hooks
  const { authState, authDispatch } = React.useContext(AuthContext);

  // Custom functions
  const signInWithEmail = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const signUpWithEmail = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Return component
  return (
    <div className="auth-overlay">
      <div className="auth-dialog">
        {/* Close button */}
        <i
          className="material-icons btn-close"
          onClick={(e) => {
            e.stopPropagation();
            return authState.showSignIn
              ? authDispatch(EAuthAction.ALL_HIDE)
              : authState.showSignUp
              ? authDispatch(EAuthAction.ALL_HIDE)
              : null;
          }}
        >
          close
        </i>
        {/* Content header */}
        <div className="auth-header">
          <h5>Join Wattpad</h5>
          <p>
            Be part of a global community of readers and writers, all connected
            through the power of story.
          </p>
        </div>
        {/* Content body */}
        <div className="auth-body">
          <form>
            {authState.showSignUp ? (
              <div>
                <p>Username</p>
                <input type="text" placeholder="Enter username" />
              </div>
            ) : null}
            <div>
              <p>Email</p>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <p>Password</p>
              <input type="password" placeholder="Enter password" />
            </div>
            <button
              className="waves-effect waves-light btn auth-btn"
              onClick={
                authState.showSignIn
                  ? (e) => signInWithEmail(e)
                  : authState.showSignUp
                  ? (e) => signUpWithEmail(e)
                  : () => {}
              }
            >
              {authState.showSignIn
                ? "Log in"
                : authState.showSignUp
                ? "Sign up"
                : ""}
            </button>
          </form>
        </div>
        {/* Content footer */}
        <div className="auth-footer">
          {authState.showSignIn ? (
            <p>
              Don't have an account?{<br />}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  authDispatch(EAuthAction.SIGNUP_SHOW);
                }}
              >
                Sign up
              </span>
            </p>
          ) : authState.showSignUp ? (
            <p>
              If you already have an account,{<br />}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  authDispatch(EAuthAction.SIGNIN_SHOW);
                }}
              >
                Log in
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
