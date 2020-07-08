import { put, takeEvery, call } from "redux-saga/effects";
import {
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
  contactsPost,
  contactsPostSuccess,
  contactsPostFailed,
} from "../reducers/phonebook.js";
import { getRequest, postRequest } from "#/agent";

function* contactsGetEffect() {
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

function* contactsPostEffect(action) {
  const { dataField } = action.payload;
  try {
    const contact = yield call(
      postRequest,
      "http://localhost:3000/phonebook",
      dataField
    );
    yield put(
      contactsPostSuccess({
        contact,
      })
    );
  } catch (errorMessage) {
    yield put(contactsPostFailed({ errorMessage }));
  }
}

function* watchContactsActions() {
  yield takeEvery(contactsGet, contactsGetEffect);
  yield takeEvery(contactsPost, contactsPostEffect);
}

export default watchContactsActions;
