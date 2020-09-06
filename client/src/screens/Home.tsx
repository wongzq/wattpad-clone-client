import * as React from "react";
import "./Home.css";
import { AuthContext } from "../components/NavBar";
import { EAuthAction } from "../reducers/Auth.reducer";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { authDispatch } = React.useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="top">
        <div className="top-image">
          <img src={require("../assets/hero-devices.png")} alt="" />
        </div>
        <div className="top-title">
          <h1>Hi, we're Wattpad.</h1>
        </div>
        <div className="top-description">
          <h5>The world's most-loved social storytelling platform</h5>
          <p>
            Wattpad connects a global community of 80 million readers and
            writers through the power of story
          </p>
          <div className="nested-top-buttons">
            <button
              className="waves-effect btn-flat btn-orange"
              onClick={() => authDispatch(EAuthAction.SIGNIN_SHOW)}
            >
              Start Reading
            </button>
            <button
              className="waves-effect btn-flat btn-orange"
              onClick={() => authDispatch(EAuthAction.SIGNIN_SHOW)}
            >
              Start Writing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
