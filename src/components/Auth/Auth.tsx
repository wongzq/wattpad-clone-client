import * as React from "react";
import "./Auth.css";
import { AuthContext, UserContext } from "../../App/App";
import { EAuthAction } from "../../reducers/Auth.reducer";
import { IUserActionType } from "../../reducers/User.reducer";

////////////////////////////////////////////////////////////////////////////////
export interface ISignUpProps {
  name?: string;
}
export default function Auth({ name }: ISignUpProps) {
  // React Hooks
  const { authState, authDispatch } = React.useContext(AuthContext);
  const { userDispatch } = React.useContext(UserContext);

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
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter username" />
              </div>
            ) : null}
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <button
              className="waves-effect waves-light btn auth-btn"
              onClick={(e) => {
                if (authState.showSignIn) {
                  signInWithEmail(e);
                  authDispatch(EAuthAction.ALL_HIDE);
                  userDispatch({
                    type: IUserActionType.USER,
                    payload: { data: "user data" },
                  });
                } else if (authState.showSignUp) {
                  signUpWithEmail(e);
                  authDispatch(EAuthAction.ALL_HIDE);
                }
              }}
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
                data-testid="goto-signup"
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
                data-testid="goto-signin"
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
