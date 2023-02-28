import { SET_LOGIN, SET_LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  user: {
    firstName: "",
    lastName: "",
    loggedIn: false,
  },
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          loggedIn: true,
        },
      };
    case SET_LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default loginReducer;
