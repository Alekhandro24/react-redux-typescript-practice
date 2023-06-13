import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";
import axios from "axios";

// http://jsonplaceholder.typicode.com/users

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const res = await axios.get("http://jsonplaceholder.typicode.com/users");
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: res.data,
        });
      });
      // dispatch({
      //   type: UserActionTypes.FETCH_USERS_SUCCESS,
      //   payload: res.data,
      // });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Loading error",
      });
    }
  };
};
