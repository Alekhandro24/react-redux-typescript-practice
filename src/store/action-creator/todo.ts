import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodoActionsTypes } from "../../types/todo";

// http://jsonplaceholder.typicode.com/users

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS });
      const res = await axios.get("http://jsonplaceholder.typicode.com/todos", {
        params: { _page: page, _limit: limit },
      });
      setTimeout(() => {
        dispatch({
          type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: "Loading error",
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page };
}
