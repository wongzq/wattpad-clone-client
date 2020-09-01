import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import UserReducer, {
  IUserReducerActionType,
  IUserReducerAction,
} from "./reducers/UserReducer";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";

// UserContext to keep track of when user is logged in, using UserReducer
export interface IUserContext {
  state: any;
  dispatch: React.Dispatch<IUserReducerAction>;
}

export const UserContext = React.createContext<IUserContext>({
  state: {},
  dispatch: () => {},
});

// AppRouting
const AppRouting = () => {
  const history = useHistory();
  const { dispatch } = React.useContext(UserContext);

  // check if user is logged in
  React.useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      dispatch({
        type: IUserReducerActionType.USER,
        payload: JSON.parse(userStr),
      });
    } else {
      history.replace("/signin");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
};

// App
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [state, dispatch] = React.useReducer(
    UserReducer.reducer,
    UserReducer.initState
  );

  console.log(state);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="home-container">
          <AppRouting></AppRouting>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
