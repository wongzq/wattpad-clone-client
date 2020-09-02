import * as React from "react";
import Auth from "./Auth";
import AuthReducer, { IAuthState, EAuthAction } from "../reducers/Auth.reducer";
import "./NavBar.css";

////////////////////////////////////////////////////////////////////////////////
// AuthContext for AuthReducer
export interface IAuthContext {
  authState: IAuthState;
  authDispatch: React.Dispatch<EAuthAction>;
}
export const AuthContext = React.createContext<IAuthContext>({
  authState: AuthReducer.initState,
  authDispatch: () => {},
});

////////////////////////////////////////////////////////////////////////////////
// NavBar
export interface INavBarProps {}
export default function NavBar(props: INavBarProps) {
  // React Hooks
  const [authState, authDispatch] = React.useReducer(
    AuthReducer.reducer,
    AuthReducer.initState
  );
  React.useEffect(() => {}, [authState]);

  // Return component
  return (
    <div>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        {authState.showSignIn || authState.showSignUp ? <Auth /> : null}
      </AuthContext.Provider>
      <nav>
        <div className="nav">
          <ul>
            <li>
              <img
                className="nav-item wattpad-logo"
                src={require("../assets/wattpad-title.png")}
                alt="Wattpad"
              />
            </li>
            <li>
              <div className="nav-item">Browse</div>
            </li>
            <li>
              <div className="nav-item">Search</div>
            </li>
          </ul>
          <ul className="right">
            <li>
              <div
                className="nav-item"
                onClick={() => authDispatch(EAuthAction.SIGNIN_SHOW)}
              >
                Log in
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
