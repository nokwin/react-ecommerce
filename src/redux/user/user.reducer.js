import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
