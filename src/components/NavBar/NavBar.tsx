import * as React from "react";
import AuthReducer, {
  IAuthState,
  EAuthAction,
} from "../../reducers/Auth.reducer";
import "./NavBar.css";
import { Link } from "react-router-dom";

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
  const { authDispatch } = React.useContext(AuthContext);

  // Return component
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/" className="nav-item">
                <img
                  className="nav-item wattpad-logo"
                  src={require("../../assets/wattpad-title.png")}
                  alt="Wattpad"
                />
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav-item">
                Browse
              </Link>
            </li>
            <li>
              <div className="nav-item">Search</div>
            </li>
          </ul>
          <ul className="right">
            <li>
              <div
                className="nav-item"
                onClick={(e) => {
                  e.stopPropagation();
                  authDispatch(EAuthAction.SIGNIN_SHOW);
                }}
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
