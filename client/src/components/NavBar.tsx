import * as React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import SignUp from "./SignUp";

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const { state, dispatch } = React.useContext(UserContext);

  return (
    <div>
      <SignUp></SignUp>
      <nav>
        <div className="nav">
          <ul>
            <li>
              <a href="/">
                <img
                  className="wattpad-logo"
                  src={require("../assets/wattpad-title.png")}
                  alt="Wattpad"
                />
              </a>
            </li>
            <li>
              <a href="">Browse</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
