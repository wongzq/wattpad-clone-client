import * as React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const { state, dispatch } = React.useContext(UserContext);

  const renderLeftNav = () => {
    return <div></div>;
  };

  const renderRightNav = () => {
    if (state) {
      return <li>Profile</li>;
    } else {
      return <li>Log In</li>;
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <ul>
          <li key="wattpad">
            <a href="/">
              <img
                className="wattpad-logo"
                src={require("./wattpad-title.png")}
                alt="Wattpad"
              />
            </a>
          </li>
          <li key="browse">
            <Link to="/">Browse</Link>
          </li>
          <li key="search">
            <a href="/">Search</a>
          </li>
        </ul>
        <ul className="right">
          <li key="me">
            <Link to="/">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
