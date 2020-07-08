import { put, takeEvery, call } from "redux-saga/effects";
import {
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
  contactsPost,
  contactsPostSuccess,
  contactsPostFailed,
  contactsDelete,
  contactsDeleteSuccess,
  contactsDeleteFailed,
} from "../reducers/phonebook.js";
import { getRequest, postRequest, deleteRequest } from "#/agent";

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

function* contactsDeleteEffect(action) {
  const { id } = action.payload;
  try {
    yield call(deleteRequest, `http://localhost:3000/phonebook/${id}`, { id });
    yield put(
      contactsDeleteSuccess({
        id,
      })
    );
  } catch (errorMessage) {
    yield put(contactsDeleteFailed({ errorMessage }));
  }
}

function* watchContactsActions() {
  yield takeEvery(contactsGet, contactsGetEffect);
  yield takeEvery(contactsPost, contactsPostEffect);
  yield takeEvery(contactsDelete, contactsDeleteEffect);
}

export default watchContactsActions;
