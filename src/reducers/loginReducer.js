import { SET_LOGIN, SET_LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: "",
  lastName: "",
  loggedIn: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        loggedIn: true,
      };
    case SET_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
