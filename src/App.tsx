import * as React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import UserReducer, {
  IUserReducerActionType,
  IUserReducerAction,
} from "./reducers/User.reducer";
import Landing from "./screens/Landing";
import NavBar, { AuthContext } from "./components/NavBar";
import AuthReducer from "./reducers/Auth.reducer";
import Auth from "./components/Auth";
import Home from "./screens/Home";

////////////////////////////////////////////////////////////////////////////////
// UserContext to keep track of when user is logged in, using UserReducer
export interface IUserContext {
  userState: any;
  userDispatch: React.Dispatch<IUserReducerAction>;
}
export const UserContext = React.createContext<IUserContext>({
  userState: {},
  userDispatch: () => {},
});

////////////////////////////////////////////////////////////////////////////////
// AppRouting Local Component
const AppRouting = () => {
  // React Hooks
  const { userState, userDispatch } = React.useContext(UserContext);

  // check if user is logged in
  React.useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      userDispatch({
        type: IUserReducerActionType.USER,
        payload: JSON.parse(userStr),
      });
      // history.replace("/home");
    } else {
      // history.replace("/home");
    }
  }, [userState]); // eslint-disable-line react-hooks/exhaustive-deps

  // Return component
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

////////////////////////////////////////////////////////////////////////////////
// App Component
export interface IAppProps {}
export default function App(props: IAppProps) {
  // React Hooks
  const [userState, userDispatch] = React.useReducer(
    UserReducer.reducer,
    UserReducer.initState
  );
  const [authState, authDispatch] = React.useReducer(
    AuthReducer.reducer,
    AuthReducer.initState
  );

  // Return component
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <UserContext.Provider value={{ userState, userDispatch }}>
        {authState.showSignIn || authState.showSignUp ? <Auth /> : null}
        <HashRouter>
          <NavBar></NavBar>
          <div className="home-container">
            <AppRouting />
          </div>
        </HashRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
