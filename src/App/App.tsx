import * as React from "react";
import "./App.module.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import UserReducer, {
  IUserActionType,
  IUserAction,
  IUserState,
} from "../reducers/User.reducer";
import AuthReducer, { EAuthAction, IAuthState } from "../reducers/Auth.reducer";
import Auth from "../components/Auth/Auth";
import NavBar from "../components/NavBar/NavBar";
import Landing from "../screens/Landing/Landing";
import Home from "../screens/Home/Home";

////////////////////////////////////////////////////////////////////////////////
// AuthContext to keep track of showing SignIn/SignUp modal, using AuthReducer
export interface IAuthContext {
  authState: IAuthState;
  authDispatch: React.Dispatch<EAuthAction>;
}
export const AuthContext = React.createContext<IAuthContext>({
  authState: AuthReducer.initState,
  authDispatch: () => {},
});

////////////////////////////////////////////////////////////////////////////////
// UserContext to keep track of when user is logged in, using UserReducer
export interface IUserContext {
  userState: IUserState;
  userDispatch: React.Dispatch<IUserAction>;
}
export const UserContext = React.createContext<IUserContext>({
  userState: UserReducer.initState,
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
        type: IUserActionType.USER,
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
