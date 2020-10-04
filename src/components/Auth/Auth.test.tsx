import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Auth from "./Auth";
import { AuthContext } from "./../../App/App";
import AuthReducer, {
  EAuthAction,
  IAuthState,
} from "./../../reducers/Auth.reducer";

// Test Log in
describe("<Auth /> : Log in", () => {
  let authState: IAuthState, authDispatch: React.Dispatch<EAuthAction>;

  beforeEach(() => {
    authState = {
      showSignIn: true,
      showSignUp: AuthReducer.initState.showSignUp,
    };
    authDispatch = jest.fn();

    render(
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <Auth />
      </AuthContext.Provider>
    );
  });

  it("renders 'Join Wattpad' heading", () => {
    const headerText = screen.getByRole("heading", { name: /join wattpad/i });
    expect(headerText).toBeInTheDocument();
  });

  it("renders 'email' label and input", () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it("renders 'password' label and input", () => {
    const passwordLabel = screen.getByLabelText(/password/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders 'Log in' button", () => {
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);
    expect(authDispatch).toBeCalled();
    expect(authDispatch).toBeCalledTimes(1);
  });

  it("renders 'goto sign up' span", () => {
    const gotoSignupSpan = screen.getByTestId("goto-signup");
    expect(gotoSignupSpan).toBeInTheDocument();
  });
});

// Test Sign up
describe("<Auth /> : Sign up", () => {
  let authState: IAuthState, authDispatch: React.Dispatch<EAuthAction>;

  beforeEach(() => {
    authState = {
      showSignIn: AuthReducer.initState.showSignIn,
      showSignUp: true,
    };
    authDispatch = jest.fn();

    render(
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <Auth />
      </AuthContext.Provider>
    );
  });

  it("renders 'Join Wattpad' heading", () => {
    const headerText = screen.getByRole("heading", { name: /join wattpad/i });
    expect(headerText).toBeInTheDocument();
  });

  it("renders 'username' label and input", () => {
    const usernameLabel = screen.getByLabelText(/username/i);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  });

  it("renders 'email' label and input", () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it("renders 'password' label and input", () => {
    const passwordLabel = screen.getByLabelText(/password/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders 'Sign up' button", () => {
    const signupButton = screen.getByRole("button", { name: /sign up/i });
    expect(signupButton).toBeInTheDocument();
    userEvent.click(signupButton);
    expect(authDispatch).toBeCalled;
    expect(authDispatch).toBeCalledTimes(1);
  });

  it("renders 'goto log in' span", () => {
    const gotoLoginSpan = screen.getByTestId("goto-signin");
    expect(gotoLoginSpan).toBeInTheDocument();
  });
});
