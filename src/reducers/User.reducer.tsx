const initState = null;

export interface IUserReducerAction {
  type?: IUserReducerActionType;
  payload?: any;
}

export enum IUserReducerActionType {
  USER,
  LOGOUT,
}

const reducer = (state: {} | null | undefined, action: IUserReducerAction) => {
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
