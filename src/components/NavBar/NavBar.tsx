import * as React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { EAuthAction } from "../../reducers/Auth.reducer";
import { AuthContext, UserContext } from "../../App/App";
import { IUserActionType } from "../../reducers/User.reducer";
import { useClickOutside } from "../../hooks/useClickOutside";

////////////////////////////////////////////////////////////////////////////////
// NavBar
export interface INavBarProps {}
export default function NavBar(props: INavBarProps) {
  // React Hooks
  const { userState, userDispatch } = React.useContext(UserContext);
  const { authDispatch } = React.useContext(AuthContext);
  const [menuRef, menuOpen, setMenuOpen] = useClickOutside(false);
  const [browseRef, browseOpen, setBrowseOpen] = useClickOutside(false);

  // Return component
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-content">
          <ul>
            <li>
              <Link to={userState.data ? "/home" : "/"} className="nav-item">
                <img
                  className="nav-item wattpad-logo"
                  src={require("../../assets/wattpad-title.png")}
                  alt="Wattpad"
                />
              </Link>
            </li>
            <div ref={browseRef} style={{ backgroundColor: "red" }}>
              <li>
                <div
                  className="nav-item"
                  onClick={() => setBrowseOpen(!browseOpen)}
                >
                  Browse
                </div>
                {browseOpen && (
                  <ul className="dropdown-container-browse">
                    <li className="dropdown-item-browse-header">Browse</li>
                    <li className="dropdown-item-browse">Adventure</li>
                    <li className="dropdown-item-browse">Fantasy</li>
                    <li className="dropdown-item-browse">Horror</li>
                    <li className="dropdown-item-browse">Humor</li>
                    <li className="dropdown-item-browse">Mystery</li>
                    <li className="dropdown-item-browse">Non-Fiction</li>
                    <li className="dropdown-item-browse">Paranormal</li>
                    <li className="dropdown-item-browse">Poetry</li>
                    <li className="dropdown-item-browse">Romance</li>
                    <li className="dropdown-item-browse">Science Fiction</li>
                    <li className="dropdown-item-browse">Teen Fiction</li>
                    <li className="dropdown-item-browse">Thriller</li>
                  </ul>
                )}
              </li>
            </div>
            <li>
              <div className="nav-item">Search</div>
            </li>
          </ul>
          <ul className="right">
            <div ref={menuRef} style={{ backgroundColor: "red" }}>
              {userState.data ? (
                <li>
                  <div
                    className="nav-item"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    Me
                  </div>
                  {menuOpen && (
                    <ul className="dropdown-container-me">
                      <li className="dropdown-item-me">Profile</li>
                      <hr />
                      <li className="dropdown-item-me">My Works</li>
                      <li className="dropdown-item-me">Libraries</li>
                      <hr />
                      <li
                        className="dropdown-item-me"
                        onClick={(e) => {
                          e.stopPropagation();
                          userDispatch({ type: IUserActionType.LOGOUT });
                          setMenuOpen(false);
                        }}
                      >
                        Log out
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
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
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
