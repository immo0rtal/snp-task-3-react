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
  contactsPut,
  contactsPutSuccess,
  contactsPutFailed,
} from "../reducers/phonebook.js";
import { getRequest, postRequest, deleteRequest, putRequest } from "#/agent";

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

function* contactsPutEffect(action) {
  const { dataField } = action.payload;
  try {
    const contact = yield call(
      putRequest,
      `http://localhost:3000/phonebook/${dataField.id}`,
      dataField
    );
    yield put(
      contactsPutSuccess({
        contact,
      })
    );
  } catch (errorMessage) {
    yield put(contactsPutFailed({ errorMessage }));
  }
}

function* watchContactsActions() {
  yield takeEvery(contactsGet, contactsGetEffect);
  yield takeEvery(contactsPost, contactsPostEffect);
  yield takeEvery(contactsDelete, contactsDeleteEffect);
  yield takeEvery(contactsPut, contactsPutEffect);
}

export default watchContactsActions;
