import watchTodosActions from "./phonebook.js";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchTodosActions()]);
}
