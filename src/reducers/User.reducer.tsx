const initState = { data: null };

export interface IUserState {
  data?: string | null;
}

export interface IUserReducerAction {
  type?: IUserReducerActionType;
  payload?: any;
}

export enum IUserReducerActionType {
  USER,
  LOGOUT,
}

const reducer = (
  state: IUserState | null | undefined,
  action: IUserReducerAction
) => {
  switch (action.type) {
    case IUserReducerActionType.USER:
      return action.payload;
    case IUserReducerActionType.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default { reducer, initState };
