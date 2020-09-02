import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserReducer, {
  IUserReducerActionType,
  IUserReducerAction,
} from "./reducers/User.reducer";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";

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
  const { userDispatch: dispatch } = React.useContext(UserContext);

  // check if user is logged in
  React.useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr)
      dispatch({
        type: IUserReducerActionType.USER,
        payload: JSON.parse(userStr),
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Return component
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
};

////////////////////////////////////////////////////////////////////////////////
// App Component
export interface IAppProps {}
export default function App(props: IAppProps) {
  // React Hooks
  const [state, dispatch] = React.useReducer(
    UserReducer.reducer,
    UserReducer.initState
  );

  // Return component
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="home-container">
          <AppRouting></AppRouting>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
