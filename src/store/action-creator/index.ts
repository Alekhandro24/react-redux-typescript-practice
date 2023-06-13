/* eslint-disable import/no-anonymous-default-export */
import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};
