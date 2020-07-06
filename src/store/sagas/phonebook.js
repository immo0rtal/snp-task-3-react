import { put, takeEvery, call } from "redux-saga/effects";
import {
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
} from "../reducers/phonebook.js";
import { getRequest } from "#/agent";

function* todosGetEffect() {
  try {
    const contacts = yield call(getRequest, "http://localhost:3000/phonebook");
    yield put(
      contactsGetSuccess({
        contacts,
      })
    );
  } catch (errorMessage) {
    yield put(contactsGetFailed({ errorMessage }));
  }
}

function* watchTodosActions() {
  yield takeEvery(contactsGet, todosGetEffect);
}

export default watchTodosActions;
