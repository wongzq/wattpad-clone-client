import * as React from "react";
import AuthReducer, {
  IAuthState,
  EAuthAction,
} from "../../reducers/Auth.reducer";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext, UserContext } from "../../App/App";
import { IUserActionType } from "../../reducers/User.reducer";

////////////////////////////////////////////////////////////////////////////////
// NavBar
export interface INavBarProps {}
export default function NavBar(props: INavBarProps) {
  // React Hooks
  const { userState, userDispatch } = React.useContext(UserContext);
  const { authDispatch } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

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
              {userState ? (
                <div>
                  <div className="nav-item" onClick={() => setOpen(!open)}>
                    Me
                  </div>
                  {!open && (
                    <ul className="dropdown-container">
                      <li className="dropdown-item">Profile</li>
                      <hr />
                      <li className="dropdown-item">My Works</li>
                      <li className="dropdown-item">Libraries</li>
                      <hr />
                      <li
                        className="dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          userDispatch({ type: IUserActionType.LOGOUT });
                        }}
                      >
                        Log out
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <div
                  className="nav-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    authDispatch(EAuthAction.SIGNIN_SHOW);
                  }}
                >
                  Log in
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
